{ pkgs, lib, config, inputs, ... }:

{
  cachix.enable = false;
  packages = with pkgs; [ git corepack_latest ];
  languages.typescript = {
    enable = true;
  };

  enterShell = ''
    clear
    devenv info
  '';
}
