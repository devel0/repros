FROM mcr.microsoft.com/dotnet/core/sdk:3.0.100-rc1-bionic AS build

WORKDIR /src

RUN mkdir analyzer test
COPY analyzer/analyzer.csproj analyzer
COPY test/test.csproj test
RUN dotnet restore -v n "./analyzer/analyzer.csproj"
RUN dotnet restore -v n "./test/test.csproj"

COPY . .

RUN dotnet build "./analyzer/analyzer.csproj" -c Release -o /app

COPY myentrypoint.sh /

ENTRYPOINT ["/myentrypoint.sh"]
