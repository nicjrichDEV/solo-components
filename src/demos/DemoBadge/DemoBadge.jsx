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
        <div className="demo-section">
          <h3>Variants</h3>
          <p>
            The badge comes in three variants solid, soft, and outline. Solid is
            primarily the most used with soft and outline used in more specific
            scenarios. Solid is the components default variant.
          </p>
          <div className="demo-horizontal-container">
            <Badge>Solid</Badge>
            <Badge variant="soft">Soft</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </div>
        <div className="demo-section">
          <h3>Size</h3>
          <p>
            The badge comes in three sizes with medium being the default unless
            specified. Downstream consumers can customize every aspect of the
            badge however if there is a special scenario were this is needed.
          </p>
          <div className="demo-horizontal-container">
            <Badge size="sm">Small</Badge>
            <Badge>Medium</Badge>
            <Badge size="lg">Large</Badge>
          </div>
        </div>
        <div className="demo-section">
          <h3>Status</h3>
          <p>
            The badges color is based on semantic 'status' colors such as
            neutral, brand, info, etc. If you have a need to define additional
            colors you can override the badge with any specific class names you
            desire. The default color is neutral.
          </p>
          <div className="demo-horizontal-container">
            <Badge>Neutral</Badge>
            <Badge status="brand">Brand</Badge>
            <Badge status="info">Info</Badge>
            <Badge status="success">Success</Badge>
            <Badge status="warning">Warning</Badge>
            <Badge status="error">Error</Badge>
          </div>
        </div>
        <div className="demo-section">
          <h3>Shape</h3>
          <p>
            The Badge has two shape options either being a complete pill or more
            of a square badge. By default the pill shape is chosen. Downstream
            can override the border radius with custom class names if change is
            desired.
          </p>
          <div className="demo-horizontal-container">
            <Badge>Pill</Badge>
            <Badge shape="square">Square</Badge>
          </div>
        </div>
        <div className="demo-section">
          <h3>Overview Grid</h3>
          <p>
            This section gives you and overview of all the variant and status
            options between light and dark modes allowing for a side by side
            comparison.
          </p>
          <div className="grids-container">
            <div className="demo-light">
              <h3>Light</h3>
              <div className="demo-grid" data-theme="light">
                <div className="demo-solid">
                  <div className="demo-column">
                    <Badge className="demo-badge">Neutral</Badge>
                    <Badge className="demo-badge" status="brand">
                      Brand
                    </Badge>
                    <Badge className="demo-badge" status="info">
                      Info
                    </Badge>
                    <Badge className="demo-badge" status="success">
                      Success
                    </Badge>
                    <Badge className="demo-badge" status="warning">
                      Warning
                    </Badge>
                    <Badge className="demo-badge" status="error">
                      Error
                    </Badge>
                  </div>
                </div>
                <div className="demo-soft">
                  <div className="demo-column">
                    <Badge className="demo-badge" variant="soft">
                      Neutral
                    </Badge>
                    <Badge className="demo-badge" status="brand" variant="soft">
                      Brand
                    </Badge>
                    <Badge className="demo-badge" status="info" variant="soft">
                      Info
                    </Badge>
                    <Badge
                      className="demo-badge"
                      status="success"
                      variant="soft"
                    >
                      Success
                    </Badge>
                    <Badge
                      className="demo-badge"
                      status="warning"
                      variant="soft"
                    >
                      Warning
                    </Badge>
                    <Badge className="demo-badge" status="error" variant="soft">
                      Error
                    </Badge>
                  </div>
                </div>
                <div className="demo-outline">
                  <div className="demo-column">
                    <Badge className="demo-badge" variant="outline">
                      Neutral
                    </Badge>
                    <Badge
                      className="demo-badge"
                      status="brand"
                      variant="outline"
                    >
                      Brand
                    </Badge>
                    <Badge
                      className="demo-badge"
                      status="info"
                      variant="outline"
                    >
                      Info
                    </Badge>
                    <Badge
                      className="demo-badge"
                      status="success"
                      variant="outline"
                    >
                      Success
                    </Badge>
                    <Badge
                      className="demo-badge"
                      status="warning"
                      variant="outline"
                    >
                      Warning
                    </Badge>
                    <Badge
                      className="demo-badge"
                      status="error"
                      variant="outline"
                    >
                      Error
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
            <div className="demo-dark">
              <h3>Dark</h3>
              <div className="demo-grid" data-theme="dark">
                <div className="demo-solid">
                  <div className="demo-column">
                    <Badge className="demo-badge">Neutral</Badge>
                    <Badge className="demo-badge" status="brand">
                      Brand
                    </Badge>
                    <Badge className="demo-badge" status="info">
                      Info
                    </Badge>
                    <Badge className="demo-badge" status="success">
                      Success
                    </Badge>
                    <Badge className="demo-badge" status="warning">
                      Warning
                    </Badge>
                    <Badge className="demo-badge" status="error">
                      Error
                    </Badge>
                  </div>
                </div>
                <div className="demo-soft">
                  <div className="demo-column">
                    <Badge className="demo-badge" variant="soft">
                      Neutral
                    </Badge>
                    <Badge className="demo-badge" status="brand" variant="soft">
                      Brand
                    </Badge>
                    <Badge className="demo-badge" status="info" variant="soft">
                      Info
                    </Badge>
                    <Badge
                      className="demo-badge"
                      status="success"
                      variant="soft"
                    >
                      Success
                    </Badge>
                    <Badge
                      className="demo-badge"
                      status="warning"
                      variant="soft"
                    >
                      Warning
                    </Badge>
                    <Badge className="demo-badge" status="error" variant="soft">
                      Error
                    </Badge>
                  </div>
                </div>
                <div className="demo-outline">
                  <div className="demo-column">
                    <Badge className="demo-badge" variant="outline">
                      Neutral
                    </Badge>
                    <Badge
                      className="demo-badge"
                      status="brand"
                      variant="outline"
                    >
                      Brand
                    </Badge>
                    <Badge
                      className="demo-badge"
                      status="info"
                      variant="outline"
                    >
                      Info
                    </Badge>
                    <Badge
                      className="demo-badge"
                      status="success"
                      variant="outline"
                    >
                      Success
                    </Badge>
                    <Badge
                      className="demo-badge"
                      status="warning"
                      variant="outline"
                    >
                      Warning
                    </Badge>
                    <Badge
                      className="demo-badge"
                      status="error"
                      variant="outline"
                    >
                      Error
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Demo>
  );
}
