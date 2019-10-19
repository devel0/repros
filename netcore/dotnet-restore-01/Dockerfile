FROM mcr.microsoft.com/dotnet/core/sdk:3.0

WORKDIR /test

COPY ["SecurityManagerWebapi.csproj", "."]

RUN dotnet restore -v n .
# RUN dotnet restore --disable-parallel -v n .

CMD /bin/bash

