#!/bin/bash

echo "------------ENTRYPOINT"
#export DOTNET_ROOT=/usr/share/dotnet
#export MSBuildSDKsPath=$DOTNET_ROOT/sdk/$(${DOTNET_ROOT}/dotnet --version)/Sdks

dotnet --list-runtimes

echo "dotnet executable = [$(which dotnet)]"
echo "PATH              = [$PATH]"
#echo "DOTNET_ROOT       = [$DOTNET_ROOT]"
#echo "MSBuildSDKsPath   = [$MSBuildSDKsPath]"

#export COREHOST_TRACE=1

dotnet /app/analyzer.dll
