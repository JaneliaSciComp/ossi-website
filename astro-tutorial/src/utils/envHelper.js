export function authTokenFn(){
    console.log(import.meta.env.PUBLIC_OSSI_SITE_TOKEN)
 return import.meta.env.PUBLIC_OSSI_SITE_TOKEN ?? process.env.PUBLIC_OSSI_SITE_TOKEN
}

