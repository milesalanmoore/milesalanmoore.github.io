# Marks

Logos for the home page. Most are tool marks for the gallery, used in two
places, and the difference between them is the whole reason this directory has
two kinds of file in it. The three institution lockups at the bottom are a
separate case.

- **The rail** (the scrolling Toolkit cards) shows every mark at full colour.
- **The band** (the marquee under the hero) is quiet at rest and comes to colour
  on hover.

Both carry every tool. How a mark reaches its resting state depends on
what kind of thing it is, and `src/data/home.ts` records which:

- **A single shape** — most of them — has a `brand`, and is simply recoloured:
  ink at rest, `brand` on hover. Vectors inherit `currentColor`; `monoMark`
  raster is painted through the file's alpha as a mask, since a PNG cannot be
  tinted as an image.
- **Artwork** has no `brand`, because no one colour can stand in for it. It
  keeps its own colours and is desaturated at rest instead. Flattening these to
  a single hue is exactly what does not work: JAX's lattice is legible only
  because its tiles differ in tone, so one fill leaves nothing but an outline,
  and a single hover colour throws away the mosaic that is the logo.

## The single-colour marks

`python r julia pytorch docker git anthropic fortran` — [Simple Icons]
(https://simpleicons.org), which publishes every brand as one 24×24 path. Taken
from the `simple-icons` npm package, `icons/<slug>.svg`; `<title>` and `role`
stripped, `fill="currentColor"` added so CSS can tint them.

`stan` — <https://github.com/stan-dev/logos>, `logo.svg`. The source is three
layers: a cream disc, the blue body, a small navy accent. Only the blue body is
kept — it is the whole recognisable mark on its own, the disc is invisible
against paper, and a two-tone mark cannot take a single hover colour. The source
ships no `viewBox`, so one is derived from the disc it draws (cx 372, cy 526,
r 166.5), giving `205.5 359.5 333 333`.

## The artwork marks

`jax` — <https://github.com/jax-ml/jax>, `images/jax_logo.svg`: 38 tiles in nine
colours. The source painted via an embedded `<style>` with `.cls-1`…`.cls-9`;
since these files are inlined into the page, that stylesheet would have become
global CSS, so the fills were moved onto the polygons and the style block
dropped. Otherwise unmodified — the colours are the mark.

`openmp` — <https://www.openmp.org/>, `openmp-header-logo-100h.png`. Used whole.
Two-tone: teal "Open" against a near-black "MP", which a single colour flattens
away.

`numpyro` — <https://github.com/pyro-ppl/numpyro>,
`docs/source/_static/img/pyro_logo_wide.png`, trimmed to its bounding box.
NumPyro publishes no mark of its own and its docs fly the Pyro glyph. The glyph
is a red-to-yellow gradient, so it is artwork for the same reason JAX is: one
fill leaves a silhouette.

All three are desaturated at rest by a filter rather than by editing the file,
so one copy serves the rail and the band. The filter carries a brightness and contrast
adjustment as well as `grayscale()` — grayscale alone comes out lighter than the
ink marks standing next to it, and the row reads as one weight or it reads as a
mistake.

## The institution lockups

`csgf cu-boulder lter` are not tool marks and do not follow the rules
above. They sit in the credentials bar under the hero, each over its
credential, and none of them reduces to a single colour. So they are drawn as
plain `<img>` at whatever file kind the institution publishes, greyed at rest
by a `grayscale()` filter and returned to full colour on hover. `logoHeight` in `src/data/home.ts` sets
the height of each: the three run from roughly square to an 11:1 wordmark, and
a shared height would leave the row lopsided.

Two of them are cropped down to the device alone, because the wordmark beside
it would only repeat the credential printed underneath:

`csgf` — <https://www.krellinst.org/>, `CSGF_H_cmyk.JPG`, the cube lifted out
of the "DOE ▮ CSGF" lockup. The source is a JPEG on white, so white is dropped
to transparent — which also opens up the cube's white faces, and that is the
right result: those faces are negative space, and they now show the page rather
than a white patch on cream.

`lter` — <https://lternet.edu/>, `themes/ndic/library/images/logo.svg`, the
striped landscape tile cropped out by narrowing the `viewBox` to `0 0 82.5 70`;
the paths are untouched.

`cu-boulder` — CU's brand CDN, `cu-boulder-logo-text-black.svg`, used whole
(the gold device with the black wordmark).

Two of these carry an embedded `<style>`, which the tool marks may not. That
rule exists because tool marks are inlined into the page, where the stylesheet
would leak into global CSS; these are loaded as `<img>`, so their stylesheets
stay inside the file.

## Not here

**MPI** has no official mark — it is a specification, not a product, and the MPI
Forum publishes no logo, which is part of why the band names OpenMP alone.

**SLURM** and **Quarto** were dropped from the gallery; their files went with
them.

**INSTAAR** publishes no mark of its own any more — its site flies the CU
wordmark. The only one to be had is a small raster from its former site, via
the Internet Archive, so the third credential carries the LTER device instead.

## Adding one

Give it a `viewBox`, no `<title>`, no embedded `<style>`. If the mark is one
shape, set `fill="currentColor"`, give it a `brand`, and it works everywhere
as-is; for raster, point `monoMark` at the same file and it will be masked. If
the mark's colours are what make it legible, leave `brand` off and it will be
desaturated at rest instead. Raster is a last resort, for marks published no
other way.
