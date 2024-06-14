{ pkgs, lib, config, inputs, ... }:

{
  env.GREET = "Initializing garfman-boilerplate";
  cachix.enable = false;
  packages = with pkgs; [ git corepack nodejs-slim jq ];
  languages = {
    nix.enable = true;
    typescript.enable = true;
  };

  enterShell = ''
    clear
    echo $GREET
    devenv info
  '';
}
