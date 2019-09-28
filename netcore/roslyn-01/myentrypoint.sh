#!/bin/bash

echo "------------ENTRYPOINT"
export DOTNET_ROOT=/usr/share/dotnet
#export MSBuildSDKsPath=$DOTNET_ROOT/sdk/$(${DOTNET_ROOT}/dotnet --version)/Sdks

#
# without MSBUILD_EXE_PATH follow error results
# Msbuild failed when processing the file '/src/test/test.csproj' with message: The SDK 'Microsoft.NET.Sdk' specified could not be found.  /src/test/test.csproj
#
export MSBUILD_EXE_PATH=$DOTNET_ROOT/sdk/$(${DOTNET_ROOT}/dotnet --version)/MSBuild.dll

dotnet --list-runtimes

echo "dotnet executable = [$(which dotnet)]"
echo "PATH              = [$PATH]"
echo "DOTNET_ROOT       = [$DOTNET_ROOT]"
echo "MSBUILD_EXE_PATH  = [$MSBUILD_EXE_PATH]"
#echo "MSBuildSDKsPath   = [$MSBuildSDKsPath]"

#export COREHOST_TRACE=1

dotnet /app/analyzer.dll
