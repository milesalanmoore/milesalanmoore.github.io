---
title: "Neovim: An overlooked IDE for applied scientists."
date: 2025-02-16
---
> Not new to nvim? Try out my nvim config! See my dotfiles [here](https://github.com/milesalanmoore/dotfiles).

In the ever-evolving landscape of software development and data science, choosing the right Integrated Development Environment (IDE) can significantly impact your productivity and workflow. I want to introduce you to `Neovim`, a powerful, lightweight, and highly customizable text editor that doubles as an escape room for the uninitiated. 

## (Neo)vim as an integrated development environment

 I have never been a fan of jupyter, Rmarkdown, or quarto notebooks (although sometimes I think they are the right tool for the job) as my tastes have been shaped by the ability to run chunks of code at a time in a `.R` script in Rstudio and see the output. I also think pure scripts are easier to automate via makefiles or [snakemake](https://snakemake.github.io/). For Python, Spyder has come the closest to this workflow but it does not feel as polished as Rstudio to me. As I've begun working more and more in *both* Python and R, I've been looking for a single environment to work across languages. Recently, I've been using [Posit's new *Positron* fork of Code OSS](https://positron.posit.co/). Unfortunately it still has some quirks that have made it difficult for me to use as a daily driver. Enter neovim.
 
Neovim (nvim) is often considered an extension on `Vim` which itself was an extension of `Vi`. Vi was invented well before my time in 1976, with Vim (**Vi** i**m**proved) [first publicly released in 1991.](https://en.wikipedia.org/wiki/Vim_(text_editor)) With the release of vim came additional features for scripting and programming including plugins and **syntax highlighting.** Fast forward to 2014, neovim emerged as a ambitious fork of Vim, aimed at modernizing the codebase and introducing features that modern developers expect. In my opinion, neovim now rivals some more heavy weight integrated development environments (IDE) for statistics, "data science", and machine learning like VS Code, Jupyter Lab, Rstudio.

## Why Neovim?

Vim is notoriously challenging to get the hang of, but it is also shipped with virtually every OS, even when `nano` isn't. Learning to use vim commands to quickly edit scripts can go a long way. Your university or company HPC probably has vim installed! This means you can easily `ssh` in and make changes to files even if you don't have installation privileges. A couple of other things I've come to appreciate:

1. Resource Efficiency: neovim's lightweight nature means it starts instantly and runs smoothly even when handling large datasets or complex notebooks.

2. Customization: Every aspect of Neovim can be tailored to your specific needs. Through its configuration system and plugin architecture, you can build an IDE that perfectly matches your workflow – whether that's analyzing data, writing documentation, or developing models.

3. Terminal Integration: As data scientists, we often need to switch between coding, running commands, and managing packages. Neovim being a terminal application means you can execute Python scripts, manage git repositories, and monitor system resources without leaving your editor.

4. Language Support: Through the Language Server Protocol (LSP), Neovim provides first-class support for Python and R, including features like code completion, documentation lookup, and real-time error checking.

## My Neovim Configuration
My config is still a work in progress, but here is a screenshot of my nvim set up to get your imagination going:

![A peak of my nvim config in action](/assets/images/nvim-screenshot.png)

In the top right I am running `btop` to monitor resources, in the bottom right I have an `ipython` REPL running, where I send code from my python script on the left. Pretty sweet!

### Essential Plugins
Aside from the *hundreds* of keyboard shortcuts that you need to learn to become effecient in Vim editors, most nvim customization is done in the `lua` programming language. It isn't a hard language to learn (it's something like julia + javascript in its syntax, I think). There are also a TON of plugins one could install. However, I recommend starting with a beginner friendly "distribution" like [lazyvim](http://www.lazyvim.org/). Which comes with some of these preconfigured, including:

1. nvim-lspconfig: Provides language server support for Python and R
2. nvim-cmp: Offers intelligent code completion
3. telescope.nvim: Enables fuzzy finding across files and symbols
4. nvim-treesitter: Powers advanced syntax highlighting and code navigation
5. vimtex: Supports LaTeX document writing for research papers
6. [iron.vim](https://github.com/Vigemus/iron.nvim): A REPL (console) for R, Python, and Julia!

