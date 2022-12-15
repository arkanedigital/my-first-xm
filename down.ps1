Write-Host "Down containers..." -ForegroundColor Green
try {
  dotnet sitecore ser pull -n "local"
  docker-compose down
  if ($LASTEXITCODE -ne 0) {
    Write-Error "Container down failed, see errors above."
  }
}
finally {
}
