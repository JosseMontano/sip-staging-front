interface ConfigType {
  backendUrl: string;
  backPyUrl: string;
}
//http://127.0.0.1:4000/api/
//https://sip-back-stagin-production.up.railway.app/api/
const config: ConfigType = {
  backendUrl: "https://sip-back-stagin-production.up.railway.app/api/",
  backPyUrl: "https://flask-production-6d98.up.railway.app/api/",
};

export default config;
