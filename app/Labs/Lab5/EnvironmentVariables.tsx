//reading the environment variable and displayin it
//the process.env.NEXT_PUBLIC_HTTP_SERVER reads the value from our .env.development file

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function EnvironmentVariables() {
  return (
    <div id="wd-environment-variables">
      <h3>Environment Variables</h3>
      <p>Remote Server: {HTTP_SERVER}</p>
      <hr />
    </div>
  );
}
