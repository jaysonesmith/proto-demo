import * as protoLoader from "@grpc/proto-loader"
import path from "path"

const includePath = path.join(__dirname, "./proto")
console.log("includePath:", includePath)

const opts = {
  includeDirs: [includePath]
}

const loadServiceProtos = (service) => {
  let packageDefinition = protoLoader.loadSync(`demo_services/${service}/${service}_service.proto`, opts)

  console.log("packageDefinition", packageDefinition)

  return packageDefinition
}

loadServiceProtos(process.argv[2])
