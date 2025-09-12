import Badge from "../../components/badge/Badge";
import Demo from "../../internalComponents/demo/Demo";
import "./DemoBadge.css";

export default function DemoBadge() {
  return (
    <Demo
      componentName="badge"
      title="Badge"
      description="A non-interactive badge that downstream teams are allowed to define meaning for."
    >
      <div className="demo-badge-container">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <h3>Variants</h3>
          <Badge>Solid</Badge>
          <Badge variant="soft">Soft</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <h3>Size</h3>
          <Badge size="sm">Small</Badge>
          <Badge>Medium</Badge>
          <Badge size="lg">Large</Badge>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <h3>Status</h3>
          <Badge>Neutral</Badge>
          <Badge status="brand">Brand</Badge>
          <Badge status="info">Info</Badge>
          <Badge status="success">Success</Badge>
          <Badge status="warning">Warning</Badge>
          <Badge status="error">Error</Badge>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <h3>Shape</h3>
          <Badge>Pill</Badge>
          <Badge shape="square">Square</Badge>
        </div>
      </div>
    </Demo>
  );
}
