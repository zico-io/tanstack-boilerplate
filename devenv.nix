{ pkgs, lib, config, inputs, ... }:

{
  cachix.enable = false;
  packages = with pkgs; [ git corepack nodejs-slim jq ];
  languages = {
    nix.enable = true;
    typescript.enable = true;
  };

  enterShell = ''
    clear
    devenv info
  '';
}
