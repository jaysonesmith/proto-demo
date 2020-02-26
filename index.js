import * as protoLoader from "@grpc/proto-loader"
import path from "path"

var includePath = path.join(__dirname, "./proto/demo_services")
console.log("includePath:", includePath)

const opts = {
  includeDirs: [includePath]
}

const loadServiceProtos = (service) => {
  let packageDefinition = protoLoader.loadSync(`${service}_service.proto`, opts)

  console.log("packageDefinition", packageDefinition)

  return packageDefinition
}

loadServiceProtos(process.argv[2])
