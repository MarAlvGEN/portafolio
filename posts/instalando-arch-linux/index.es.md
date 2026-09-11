---
title: "Instalando Arch Linux desde Cero"
date: 2026-09-08
description: "Guía completa para instalar Arch Linux con particiones cifradas, bootloader GRUB y un escritorio KDE Plasma mínimo."
tags: [linux, arch, installation, encryption]
image: "preview.svg"
---

# Instalando Arch Linux desde Cero

Arch Linux no es para cualquiera. Es una distribución DIY que te obliga a entender cada componente de tu sistema. En esta guía, te mostraré una instalación completa con particiones cifradas.

## Prerrequisitos

- Un USB (mínimo 8GB)
- Conexión a internet (con cable recomendado)
- Conocimientos básicos de comandos Linux
- Paciencia

## Paso 1: Bootear el ISO en vivo

Descarga el último ISO de Arch Linux desde [archlinux.org](https://archlinux.org) y crea un USB booteable:

```bash
sudo dd bs=4M if=archlinux.iso of=/dev/sdX status=progress oflag=sync
```

Bootea desde el USB y verifica que tengas internet:

```bash
ping -c 3 archlinux.org
```

## Paso 2: Particionar el Disco

Usaré GPT con UEFI. Crea el siguiente esquema:

```bash
# Limpiar y crear particiones
gdisk /dev/sda

# Crear particiones:
# 1. EFI System Partition (512MB) - EF00
# 2. Linux swap (4GB) - 8200
# 3. Linux filesystem (resto) - 8300
```

Formatear las particiones:

```bash
mkfs.fat -F32 /dev/sda1
mkswap /dev/sda2
swapon /dev/sda2
```

## Paso 3: Cifrado con LUKS

Aquí es donde se pone interesante. Cifraremos la partición raíz:

```bash
cryptsetup luksFormat /dev/sda3
cryptsetup open /dev/sda3 cryptroot
mkfs.ext4 /dev/mapper/cryptroot
mount /dev/mapper/cryptroot /mnt
```

## Paso 4: Instalación Base

```bash
pacstrap /mnt base linux linux-firmware nano networkmanager
genfstab -U /mnt >> /mnt/etc/fstab
arch-chroot /mnt
```

## Paso 5: Configuración del Bootloader

Instalar y configurar GRUB:

```bash
pacman -S grub efibootmgr
grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB
```

Editar `/etc/default/grub` para habilitar el booteo cifrado:

```bash
GRUB_CMDLINE_LINUX="cryptdevice=UUID=<your-uuid>:cryptroot"
```

Luego generar la configuración:

```bash
grub-mkconfig -o /boot/grub/grub.cfg
```

## Paso 6: Entorno de Escritorio

Para una configuración mínima pero funcional, elegí KDE Plasma:

```bash
pacman -S plasma-desktop sddm
systemctl enable sddm
```

## Consejos

1. **Siempre lee el Arch Wiki** antes de hacer cualquier cosa
2. **Haz backup de tu fstab** antes de modificarlo
3. **Prueba tu booteo cifrado** antes de reiniciar
4. **Ten un USB de emergencia** a mano

## Conclusión

Arch Linux te da control total sobre tu sistema. El proceso de instalación te enseña más sobre Linux que cualquier curso. Una vez que esté funcionando, tendrás un sistema que es exactamente lo que necesitas — ni más, ni menos.

> "Dale a un hombre una instalación de Arch, y computará por un día. Enséñale a instalar Arch, y computará por toda la vida."
