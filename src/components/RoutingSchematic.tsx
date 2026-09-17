interface NodeProps {
  x: number;
  y: number;
  w?: number;
  label: string;
  sub?: string;
  tone?: "ink" | "blue";
}

const H = 46;

function Node({ x, y, w = 132, label, sub, tone = "ink" }: NodeProps) {
  const stroke = tone === "blue" ? "var(--blue)" : "var(--ink)";
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={H}
        rx={2}
        fill="var(--paper-lit)"
        stroke={stroke}
        strokeWidth={1.25}
      />
      {/* Corner tick, as on a dimensioned drawing */}
      <path
        d={`M${x} ${y + 8} L${x} ${y} L${x + 8} ${y}`}
        fill="none"
        stroke={stroke}
        strokeWidth={1.25}
      />
      <text
        x={x + w / 2}
        y={sub ? y + 20 : y + 27}
        textAnchor="middle"
        fontFamily="var(--mono)"
        fontSize={10}
        letterSpacing={0.7}
        fill="var(--ink)"
      >
        {label}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + 33}
          textAnchor="middle"
          fontFamily="var(--mono)"
          fontSize={8.5}
          letterSpacing={0.5}
          fill="var(--ink-faint)"
        >
          {sub}
        </text>
      )}
    </g>
  );
}

function Wire({ d, delay = 0, dashed = false }: { d: string; delay?: number; dashed?: boolean }) {
  return (
    <>
      <path
        d={d}
        fill="none"
        stroke="var(--rule)"
        strokeWidth={1}
        strokeDasharray={dashed ? "4 4" : undefined}
      />
      {!dashed && (
        <path
          className="wire-flow"
          d={d}
          fill="none"
          stroke="var(--blue)"
          strokeWidth={1.5}
          style={{ animationDelay: `${delay}ms` }}
        />
      )}
    </>
  );
}

function Note({
  x,
  y,
  lines,
  anchor = "start",
}: {
  x: number;
  y: number;
  lines: string[];
  anchor?: "start" | "end" | "middle";
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fontFamily="var(--mono)"
      fontSize={8.5}
      letterSpacing={0.4}
      fill="var(--red)"
    >
      {lines.map((line, i) => (
        <tspan key={i} x={x} dy={i === 0 ? 0 : 11}>
          {line}
        </tspan>
      ))}
    </text>
  );
}

export default function RoutingSchematic() {
  return (
    <figure className="schematic">
      <svg
        viewBox="0 0 980 430"
        role="img"
        aria-labelledby="schematic-title schematic-desc"
        preserveAspectRatio="xMidYMid meet"
      >
        <title id="schematic-title">
          Approval routing schematic for the Requisition Approval Engine
        </title>
        <desc id="schematic-desc">
          A requisition is raised, forks by product class, is evaluated against a value
          band, routes to a primary approver, falls back to a secondary approver if no
          action is taken, and releases a purchase order.
        </desc>

        {/* ---- Sheet frame ---- */}
        <rect
          x={0.5}
          y={0.5}
          width={979}
          height={429}
          fill="none"
          stroke="var(--rule)"
          strokeWidth={1}
        />
        <text
          x={12}
          y={20}
          fontFamily="var(--mono)"
          fontSize={9}
          letterSpacing={1.4}
          fill="var(--ink-faint)"
        >
          FIG. 01 — APPROVAL ROUTING, MULTI-COMPANY REQUISITION ENGINE
        </text>

        {/* ---- Wires ---- */}
        {/* entry */}
        <Wire d="M142 212 H196" delay={0} />
        {/* fork up / down */}
        <Wire d="M240 196 V118 H300" delay={220} />
        <Wire d="M240 228 V306 H300" delay={220} />
        {/* band -> primary */}
        <Wire d="M432 118 H498" delay={520} />
        <Wire d="M432 306 H498" delay={520} />
        {/* primary -> release */}
        <Wire d="M630 118 H700 V190 H770" delay={820} />
        <Wire d="M630 306 H700 V234 H770" delay={820} />
        {/* fallback, dashed: primary -> secondary */}
        <Wire d="M564 164 V190 H498" dashed />
        <Wire d="M564 260 V234 H498" dashed />
        {/* secondary -> release */}
        <Wire d="M630 212 H770" delay={1100} />

        {/* ---- Fork diamond ---- */}
        <g>
          <path
            d="M218 190 L240 212 L218 234 L196 212 Z"
            fill="var(--paper-lit)"
            stroke="var(--blue)"
            strokeWidth={1.25}
          />
          <text
            x={218}
            y={176}
            textAnchor="middle"
            fontFamily="var(--mono)"
            fontSize={8.5}
            letterSpacing={0.8}
            fill="var(--blue)"
          >
            PRODUCT CLASS
          </text>
        </g>

        {/* ---- Nodes ---- */}
        <Node x={10} y={189} label="REQUISITION" sub="raised in Syspro" tone="blue" />
        <Node x={300} y={95} label="VALUE BAND 1" sub="converted to base ccy" />
        <Node x={300} y={283} label="VALUE BAND 2" sub="converted to base ccy" />
        <Node x={498} y={95} label="APPROVER" sub="primary" />
        <Node x={498} y={283} label="APPROVER" sub="primary" />
        <Node x={498} y={189} label="APPROVER" sub="secondary · fallback" />
        <Node x={770} y={189} label="PO RELEASED" tone="blue" />

        {/* ---- Branch labels ---- */}
        <text
          x={246}
          y={110}
          fontFamily="var(--mono)"
          fontSize={8.5}
          letterSpacing={0.6}
          fill="var(--ink-faint)"
        >
          CLASS A
        </text>
        <text
          x={246}
          y={324}
          fontFamily="var(--mono)"
          fontSize={8.5}
          letterSpacing={0.6}
          fill="var(--ink-faint)"
        >
          CLASS B
        </text>
        <text
          x={572}
          y={180}
          fontFamily="var(--mono)"
          fontSize={8}
          letterSpacing={0.5}
          fill="var(--ink-faint)"
        >
          NO ACTION
        </text>

        {/* ---- Red revision notes ---- */}
        <Note
          x={300}
          y={368}
          lines={[
            "REV A — banding evaluated on LINE VALUE.",
            "was unit price; high-value requisitions",
            "were routing to the wrong tier.",
          ]}
        />
        <Note
          x={968}
          y={368}
          anchor="end"
          lines={[
            "document access inherits to",
            "the backup approver. audit logged.",
          ]}
        />
        <Note x={10} y={272} lines={["actioned off-site via", "single-use email link"]} />

        {/* Leader lines for the notes */}
        <path
          d="M360 340 V331"
          fill="none"
          stroke="var(--red)"
          strokeWidth={0.9}
          strokeDasharray="3 3"
        />
        <path
          d="M836 340 V235"
          fill="none"
          stroke="var(--red)"
          strokeWidth={0.9}
          strokeDasharray="3 3"
        />
        <path
          d="M60 258 V235"
          fill="none"
          stroke="var(--red)"
          strokeWidth={0.9}
          strokeDasharray="3 3"
        />
      </svg>
    </figure>
  );
}
