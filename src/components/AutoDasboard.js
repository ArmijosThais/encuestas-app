import { Alert, Card, Image } from "react-bootstrap";
import RePieChart from "./RePieChart";
import StudentIcon from "../assets/studentIcon";
import OutlineRePieChart from "./OutlineRePieChart";
import ReSimpleBarChart from "./ReSimpleBarChart";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { ResizableBox } from "react-resizable";
import ReStackedBarChart from "./ReStackedBarChart";
import BussinesIcon from "../assets/bussinesIcon";
import imagenNoTablero from "../assets/noEncontrado.jpg";

const AutoDasboard = ({ data, setSelectedOption, tipo }) => {
  const handleOptionClick = (name) => {
    setSelectedOption(name);
  };

  return (
    <div
      style={{
        width: "90vw",
        marginRight: "auto",
        marginLeft: "auto",
        minHeight: "70vh",
        borderRadius: "20px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "20px",
        paddingTop: "20px",
        paddingLeft: "25px",
        paddingRight: "25px",
        marginBottom: "35px",
        backgroundColor: "white",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      {data && data?.total_encuestados ? (
        <>
          <ResizableBox
            width={200}
            height={200}
            minConstraints={[200, 150]}
            maxConstraints={[300, 200]}
            style={{ margin: "8px" }}
          >
            <>
              <Card style={{ height: "100%", width: "100%" }}>
                <Card.Body>
                  {tipo === "estudiantes" ? (
                    <StudentIcon height={60} width={60} />
                  ) : (
                    <BussinesIcon height={60} width={60} />
                  )}
                  <br />
                  <div>
                    <Card.Title style={{ fontSize: "30px" }}>
                      {data?.total_encuestados}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {tipo === "estudiantes"
                        ? "Total Estudiantes"
                        : "Total Empresas"}
                    </Card.Subtitle>
                  </div>
                </Card.Body>
              </Card>
            </>
          </ResizableBox>
          {data?.preguntas?.map((pregunta, idx) => (
            <ResizableBox
              width={pregunta?.tipo_pregunta === "accordeon" ? 800 : 400}
              height={300}
              minConstraints={[275, 275]}
              maxConstraints={[800, 800]}
              key={`pregunta-${idx}`}
              style={{
                margin: "8px",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <span>
                <b>{pregunta?.titulo_pregunta}</b>
              </span>
              {pregunta?.tipo_pregunta === "radio" ? (
                <OutlineRePieChart
                  data={pregunta?.opciones?.map((item) => ({
                    name: item?.texto_opcion,
                    value: parseInt(item?.numero_selecciones),
                    id_pregunta: pregunta?.id_pregunta,
                  }))}
                  onOptionClick={handleOptionClick}
                />
              ) : pregunta?.tipo_pregunta === "checkbox" ? (
                <ReSimpleBarChart
                  data={pregunta?.opciones?.map((item) => ({
                    name: item?.texto_opcion,
                    value: parseInt(item?.numero_selecciones),
                    id_pregunta: pregunta?.id_pregunta,
                  }))}
                  onOptionClick={handleOptionClick}
                />
              ) : pregunta?.tipo_pregunta === "text" ? (
                <ReSimpleBarChart
                  data={pregunta?.opciones?.map((item) => ({
                    name: item?.texto_opcion,
                    value: parseInt(item?.numero_selecciones),
                    id_pregunta: pregunta?.id_pregunta,
                  }))}
                  onOptionClick={handleOptionClick}
                />
              ) : pregunta.tipo_pregunta === "accordeon" ? (
                <ReStackedBarChart
                  data={pregunta?.opciones?.map((item) => ({
                    name: item?.texto_opcion,
                    value: parseInt(item?.numero_selecciones),
                    padre: item?.padre_opcion,
                    id_pregunta: pregunta?.id_pregunta,
                  }))}
                  onOptionClick={handleOptionClick}
                />
              ) : (
                <RePieChart
                  data={pregunta?.opciones?.map((item) => ({
                    name: item?.texto_opcion,
                    value: parseInt(item?.numero_selecciones),
                    id_pregunta: pregunta?.id_pregunta,
                  }))}
                  onOptionClick={handleOptionClick}
                />
              )}
            </ResizableBox>
          ))}
        </>
      ) : (
        <div
          style={{
            width: "50%",
            marginRight: "auto",
            marginLeft: "auto",
            textAlign: "center",
          }}
        >
          <br />
          <Alert key="secondary" variant="secondary">
            No se encontró una encuesta activa o esta aún no ha recibido ninguna respuesta.
          </Alert>
          <Image src={imagenNoTablero} rounded style={{ width: "50%" }} />
        </div>
      )}
    </div>
  );
};

export default AutoDasboard;
