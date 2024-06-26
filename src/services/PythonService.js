//const URL_acceso = "http://172.18.0.2:5000/";
const URL_acceso = "http://hatunsoft.uta.edu.ec:5000/";
//const URL_acceso = "http://172.17.0.1:5000/";
//const URL_acceso = "http://fisei-encuestas-docker-backend-1:5000/";

export async function enviarReglas(reglas) {
  try {
    const response = await fetch(`${URL_acceso}calcular_regla`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reglas),
    });
    if (!response.ok) {
      throw new Error("Error al enviar la solicitud.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al enviar la respuesta:", error);
    return {
      error:
        "Hubo un problema al enviar la solicitud. Por favor, inténtalo de nuevo más tarde.",
    };
  }
}
