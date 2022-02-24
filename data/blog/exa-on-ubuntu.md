---
banner_alt: Command
banner: https://images.unsplash.com/photo-1524741978410-350ba91a70d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80
title: Exa on Ubuntu
description: Installation guide of exa a command-line tool on Ubuntu
date: '2022-1-27'
---

The exa is a command line tool for displaying a list of files and directories and detailed information about them. The exa can be used as an alternative to the ls command. The exa provides extra set of features. It uses colors to distinguish between file types, allows to view Git status, provides ability to view directory structure as tree, and more.

This tutorial shows how to install exa on Ubuntu 20.04.

%[https://the.exa.website/]

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1643255040731/MYeOJVHQL.png)

# Installation

1. Prepare environment

```
sudo apt update
sudo apt install -y unzip
```

2. Install exa

    - Get the latest version tag of exa release and assign it to variable.

    ```
     EXA_VERSION=$(curl -s "https://api.github.com/repos/ogham/exa/releases/latest" |
     grep -Po '"tag_name": "v\K[0-9.]+')
    ```

    - Download `zip` archive from releases page of the exa repository.

    ```
    curl -Lo exa.zip "https://github.com/ogham/exa/releases/latest/download/exa-linux-
    x86_64-v${EXA_VERSION}.zip"
    ```

    - Extract executable file from a ZIP archive:

    ```
    sudo unzip -q exa.zip bin/exa -d /usr/local
    ```

Now `exa` command is available for all users as a system-wide command.

We can check exa version:

```
exa --version
```

ZIP archive is no longer needed, remove it:

```
rm -rf exa.zip
```

# Testing Exa

Run the exa command to view files and directories as a grid:

```
exa /etc
```

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1643255867238/VRwM6l2PM.png)

The `exa` command supports various options. The `-l` option displays files and directories in long output format. Together with `-l` option we can use `-h` option that adds header, `-g` displays group, `-i` shows inode number.

```
exa /etc -lhgi
```

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1643256038575/Y59djFvq_.png)

# Uninstall Exa

If you want to completely remove exa, delete executable file:

```
sudo rm -rf /usr/local/bin/exa
```

For environment preparation we needed to install unzip package. You can remove it as follows:

```
sudo apt purge --autoremove -y unzip
```
