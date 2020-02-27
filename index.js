import * as protoLoader from "@grpc/proto-loader"

const opts = {
  includeDirs: ['./proto']
}

const loadServiceProtos = (service) => {
  let packageDefinition = protoLoader.loadSync(`demo_services/${service}/${service}_service.proto`, opts)

  console.log("packageDefinition", packageDefinition)

  return packageDefinition
}

loadServiceProtos(process.argv[2])
