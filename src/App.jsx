import Demo from "./demo";
import Badge from "./badge/badge";

function App() {
  return (
    <>
      <Demo
        title="Badges"
        description="Small colorized indicator that can be used to assign some meaning by downstream teams"
      >
        <Demo.Area
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <h4>Square</h4>
            <div style={{ display: "flex", gap: "8px" }}>
              <Badge>Badge</Badge>
              <Badge color="red">Badge</Badge>
              <Badge color="yellow">Badge</Badge>
              <Badge color="green">Badge</Badge>
              <Badge color="blue">Badge</Badge>
              <Badge color="indigo">Badge</Badge>
              <Badge color="purple">Badge</Badge>
              <Badge color="pink">Badge</Badge>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <h4>Pill</h4>
            <div style={{ display: "flex", gap: "8px" }}>
              <Badge shape="pill">Badge</Badge>
              <Badge shape="pill" color="red">
                Badge
              </Badge>
              <Badge shape="pill" color="yellow">
                Badge
              </Badge>
              <Badge shape="pill" color="green">
                Badge
              </Badge>
              <Badge shape="pill" color="blue">
                Badge
              </Badge>
              <Badge shape="pill" color="indigo">
                Badge
              </Badge>
              <Badge shape="pill" color="purple">
                Badge
              </Badge>
              <Badge shape="pill" color="pink">
                Badge
              </Badge>
            </div>
          </div>
        </Demo.Area>
      </Demo>
    </>
  );
}

export default App;
