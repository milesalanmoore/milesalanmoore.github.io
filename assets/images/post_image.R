library(ggplot2)
library(dplyr)
library(MASS)      # for mvrnorm
library(ggforce)   # for circular clipping
library(viridis)   # for color scale
library(ks)        # for 2D density estimate

set.seed(123)

# Step 1: Simulate from a 10D multivariate normal
n_points <- 1000

n_dims <- 10
mu <- rep(0, n_dims)
Sigma <- diag(n_dims)  # identity covariance

X_hd <- MASS::mvrnorm(n_points, mu = mu, Sigma = Sigma)

# Step 2: Project to 2D via PCA
pca <- prcomp(X_hd)
X_2d <- as.data.frame(pca$x[, 1:2])
colnames(X_2d) <- c("x", "y")

# Step 3: Compute 2D kernel density
dens <- ks::kde(X_2d, compute.cont = TRUE)
X_2d$density <- predict(dens, x = X_2d)

# Step 4: Normalize density for coloring and size
X_2d <- X_2d %>%
  mutate(
    norm_density = scales::rescale(density),
    alpha_val = norm_density^0.5,
    size_val = 1 + 2 * norm_density
  )

# Step 5: Clip points to unit circle (optional aesthetic)
X_2d <- X_2d %>%
  mutate(r = sqrt(x^2 + y^2)) %>%
  filter(r <= max(r) * 0.98)

# Step 6: Plot
ggplot(X_2d, aes(x = x, y = y)) +
  geom_point(aes(color = norm_density, alpha = alpha_val, size = size_val)) +
  scale_color_viridis(option = "G", direction = 1) +
  scale_alpha(range = c(0.1, 0.9)) +
  scale_size(range = c(1, 2)) +
  coord_fixed() +
  theme_void() +
  theme(legend.position = "none")
  # ggforce::geom_circle(aes(x0 = 0, y0 = 0, r = max(X_2d$r)), color = "gray30", size = 0.4, linetype = "dotted")

ggsave("~/Work/Projects/milesalanmoore.github.io/assets/posterior_sim.png", device="png",
       height = 8, width=8)

# ggplot(X_2d, aes(x=r,y=y)) +
#   geom_point(aes(color = norm_density, alpha = alpha_val, size = size_val)) +
#   scale_color_viridis(option = "G", direction = 1) +
#   scale_alpha(range = c(0.1, 0.9)) +
#   scale_size(range = c(0.2, 2)) +
#   coord_polar() +
#   theme_void() +
#   theme(legend.position = "none")

mountain_colors <- scales::gradient_n_pal(
  colours = c("#0b3d0b", "#8B4513", "#ffffff"),  # green → brown → white
  values = scales::rescale(c(0, 0.5, 1))
)

# Plot
ggplot(X_2d, aes(x = x, y = y)) +
  geom_point(aes(color = norm_density, alpha = alpha_val, size = size_val)) +
  scale_color_gradientn(
    colours = c("#14532d", "#9e9e9e", "#ffffff"),
    values = scales::rescale(c(0, 0.6, 1)),
    guide = "none"
  ) +
  scale_alpha(range = c(0.1, 0.9)) +
  scale_size(range = c(1, 2)) +
  coord_fixed() +
  theme_void()+
  theme(legend.position = "none")

ggsave("~/Work/Projects/milesalanmoore.github.io/assets/posterior_sim.png", device="png",
       height = 8, width=8)

