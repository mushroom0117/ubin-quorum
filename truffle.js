module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 2000
    },
    mas: {
      host: "192.168.56.3",
      port: 20010,
      network_id: "*",
      gas: 2000,
      type: "quorum"
    },
    cb: {
      host: "192.168.56.4",
      port: 20010,
      network_id: "*",
      type: "quorum"
    },
    a: {
      host: "192.168.56.5",
      port: 20010,
      network_id: "*",
      type: "quorum"
    },
    b: {
      host: "192.168.56.6",
      port: 20010,
      network_id: "*",
      type: "quorum"
    },
    c: {
      host: "192.168.56.7",
      port: 20010,
      network_id: "*",
      type: "quorum"
    },
    d: {
      host: "192.168.56.8",
      port: 20010,
      network_id: "*",
      type: "quorum"
    },
    e: {
      host: "192.168.56.9",
      port: 20010,
      network_id: "*",
      type: "quorum"
    },
    f: {
      host: "192.168.56.10",
      port: 20010,
      network_id: "*",
      type: "quorum"
    },
    g: {
      host: "192.168.56.11",
      port: 20010,
      network_id: "*",
      type: "quorum"
    },
    h: {
      host: "192.168.56.12",
      port: 20010,
      network_id: "*",
      type: "quorum"
    },
    i: {
      host: "192.168.56.13",
      port: 20010,
      network_id: "*",
      type: "quorum"
    },
    j: {
      host: "192.168.56.14",
      port: 20010,
      network_id: "*",
      type: "quorum"
    },
    k: {
      host: "192.168.56.15",
      port: 20010,
      network_id: "*",
      type: "quorum"
    }
  },
  compilers: {
    solc: {
      version: "0.4.11",
    },
  },

};