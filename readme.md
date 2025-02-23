** Powershell

$env:GOOS = "js"
$env:GOARCH = "wasm"
go build -o square.wasm square.go

** Java
Install JDK; Add environment variable: JAVA_HOME;
Install Maven; Add env variable: MAVEN_HOME;
Add %MAVEN_HOME%\bin to PATH;


javac SquareCalculator.java



