---
title: "Installing Arch Linux from Scratch"
date: 2026-09-08
description: "A complete guide to installing Arch Linux with encrypted partitions, GRUB bootloader, and a minimal KDE Plasma desktop."
tags: [linux, arch, installation, encryption]
image: "preview.svg"
---

# Installing Arch Linux from Scratch

Arch Linux is not for the faint of heart. It's a do-it-yourself distribution that forces you to understand every component of your system. In this guide, I'll walk through a full installation with encrypted partitions.

## Prerequisites

- A USB drive (8GB minimum)
- Internet connection (wired recommended)
- Basic understanding of Linux commands
- Patience

## Step 1: Boot the Live ISO

Download the latest Arch Linux ISO from [archlinux.org](https://archlinux.org) and create a bootable USB:

```bash
sudo dd bs=4M if=archlinux.iso of=/dev/sdX status=progress oflag=sync
```

Boot from the USB and verify you have internet:

```bash
ping -c 3 archlinux.org
```

## Step 2: Partition the Disk

I'll use GPT with UEFI. Create the following layout:

```bash
# Wipe and create partitions
gdisk /dev/sda

# Create partitions:
# 1. EFI System Partition (512MB) - EF00
# 2. Linux swap (4GB) - 8200
# 3. Linux filesystem (rest) - 8300
```

Format the partitions:

```bash
mkfs.fat -F32 /dev/sda1
mkswap /dev/sda2
swapon /dev/sda2
```

## Step 3: Encryption with LUKS

This is where it gets interesting. We'll encrypt the root partition:

```bash
cryptsetup luksFormat /dev/sda3
cryptsetup open /dev/sda3 cryptroot
mkfs.ext4 /dev/mapper/cryptroot
mount /dev/mapper/cryptroot /mnt
```

## Step 4: Base Installation

```bash
pacstrap /mnt base linux linux-firmware nano networkmanager
genfstab -U /mnt >> /mnt/etc/fstab
arch-chroot /mnt
```

## Step 5: Bootloader Configuration

Install and configure GRUB:

```bash
pacman -S grub efibootmgr
grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB
```

Edit `/etc/default/grub` to enable encrypted boot:

```bash
GRUB_CMDLINE_LINUX="cryptdevice=UUID=<your-uuid>:cryptroot"
```

Then generate the config:

```bash
grub-mkconfig -o /boot/grub/grub.cfg
```

## Step 6: Desktop Environment

For a minimal but functional setup, I chose KDE Plasma:

```bash
pacman -S plasma-desktop sddm
systemctl enable sddm
```

## Tips

1. **Always read the Arch Wiki** before doing anything
2. **Backup your fstab** before modifying it
3. **Test your encrypted boot** before rebooting
4. **Keep a live USB** handy for emergencies

## Conclusion

Arch Linux gives you complete control over your system. The installation process teaches you more about Linux than any course ever will. Once it's running, you'll have a system that's exactly what you need — nothing more, nothing less.

> "Give a man an Arch installation, and he'll compute for a day. Teach him to install Arch, and he'll compute for a lifetime."
