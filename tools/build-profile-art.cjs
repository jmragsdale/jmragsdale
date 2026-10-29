// npm install --no-save sharp, then node tools/build-profile-art.cjs
// Text stays in these SVG sources; PNG exports preserve the display typography.
const fs = require('node:fs/promises');
const path = require('node:path');
const sharp = require('sharp');
const out = path.resolve(__dirname, '../assets/profile');
const esc = s => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const face = "'DIN Alternate', 'Arial Narrow', Arial, sans-serif";
const text = (x,y,size,value,fill,font=face,weight=400,extra='') => `<text x="${x}" y="${y}" fill="${fill}" font-family="${font}" font-size="${size}" font-weight="${weight}" ${extra}>${esc(value)}</text>`;
const svg = (w,h,label,body) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}"><title>${esc(label)}</title>${body}</svg>`;
async function save(name,source) {
  await fs.writeFile(path.join(out,name+'.svg'),source);
  await sharp(Buffer.from(source)).png().toFile(path.join(out,name+'.png'));
}
async function main() {
  await fs.mkdir(out,{recursive:true});
  const navy='#101f2a', white='#f1f4ee', muted='#b7c8ca', teal='#72ddbd';
  let h=`<rect width="1440" height="500" rx="20" fill="${navy}"/><path d="M64 61H1376" stroke="#33454e"/><path d="M64 61H188" stroke="${teal}" stroke-width="4"/>`;
  h+=text(64,40,20,'J / R',white,face,700);
  h+=text(1376,40,16,'SECURITY ENGINEERING  /  ATLANTA',muted,'Arial, sans-serif',400,'text-anchor="end" letter-spacing="2"');
  h+=text(64,121,20,'CLOUD + AI SECURITY',teal,'Arial, sans-serif',700,'letter-spacing="4"');
  h+=text(60,223,88,'Jermaine Ragsdale',white,face,700);
  h+=text(64,286,36,'Security architecture. Visible in code.',white);
  h+=text(64,334,25,'Identity, policy and infrastructure automation',muted,'Arial, sans-serif');
  h+=text(64,371,25,'across AWS, Azure and Google Cloud.',muted,'Arial, sans-serif');
  h+='<path d="M64 413H1376" stroke="#33454e"/>';
  h+=text(64,458,22,'CISSP',teal,face,700);
  h+=text(185,458,21,'Cloud Security Architect',white);
  h+=text(1376,458,20,'IDENTITY  /  POLICY  /  AUTOMATION',muted,face,400,'text-anchor="end" letter-spacing="1.5"');
  // The diagram echoes the policy boundary in the featured agent gateway.
  h+='<g transform="translate(1075 139)"><rect width="301" height="221" rx="12" fill="#172d37" stroke="#3e5c64"/><path d="M38 116H263" stroke="#50777b" stroke-width="2"/>';
  for (const [i,label] of ['IDENTITY','POLICY','ACTION'].entries()) {
    const x=46+i*105;
    h+=`<circle cx="${x}" cy="116" r="${i===1?25:16}" fill="${i===1?teal:navy}" stroke="${teal}" stroke-width="2"/>`;
    if(i===1)h+='<path d="M141 116l7 7 13-15" stroke="#101f2a" stroke-width="3" fill="none"/>';
    h+=text(x,176,14,label,muted,'Arial, sans-serif',400,'text-anchor="middle" letter-spacing="1"');
  }
  h+=text(25,38,15,'EXPLICIT TRUST BOUNDARIES',teal,'Arial, sans-serif',400,'letter-spacing="1"')+'</g>';
  await save('header',svg(1440,500,'Jermaine Ragsdale — CISSP, Cloud Security Architect. Cloud and AI security, identity, policy and infrastructure automation across AWS, Azure and Google Cloud.',h));
  let m=`<rect width="700" height="690" rx="20" fill="${navy}"/><path d="M40 67H660" stroke="#33454e"/><path d="M40 67H160" stroke="${teal}" stroke-width="4"/>`;
  m+=text(40,43,22,'J / R',white,face,700);
  m+=text(660,43,18,'ATLANTA  /  REMOTE',muted,face,400,'text-anchor="end" letter-spacing="1"');
  m+=text(40,125,23,'CLOUD + AI SECURITY',teal,'Arial, sans-serif',700,'letter-spacing="3"');
  m+=text(37,225,86,'Jermaine',white,face,700);
  m+=text(37,320,86,'Ragsdale',white,face,700);
  m+=text(40,389,34,'Security architecture.',white);
  m+=text(40,435,34,'Visible in code.',white);
  m+=text(40,500,26,'Identity, policy and infrastructure automation.',muted,'Arial, sans-serif');
  m+=text(40,540,26,'AWS / Azure / Google Cloud',muted,'Arial, sans-serif');
  m+='<path d="M40 586H660" stroke="#33454e"/>';
  m+=text(40,638,27,'CISSP',teal,face,700);
  m+=text(660,638,26,'Cloud Security Architect',white,face,400,'text-anchor="end"');
  await save('header-mobile',svg(700,690,'Jermaine Ragsdale — CISSP, Cloud Security Architect. Cloud and AI security across AWS, Azure and Google Cloud.',m));
  const cards=[
    ['agent-gateway','01','AGENT SECURITY','Agent Tool Gateway',['A policy boundary between AI agents','and the tools they can invoke.'],'PYTHON  /  POLICY ENFORCEMENT'],
    ['vertex-guardrails','02','GOOGLE CLOUD + AI','Vertex AI Guardrails',['Model access, workload identity,','network boundaries and audit controls.'],'TERRAFORM  /  GCP  /  AI CONTROLS'],
    ['compliance','03','MULTI-CLOUD GOVERNANCE','Cloud Compliance Baselines',['Reference infrastructure with controls','mapped to implementing resources.'],'AWS  /  AZURE  /  GOOGLE CLOUD'],
    ['iac-reviewer','04','SECURITY AUTOMATION','AI IaC Security Reviewer',['Review infrastructure code with local','or hosted language model providers.'],'PYTHON  /  TERRAFORM  /  BICEP'],
    ['secretless','05','IDENTITY ARCHITECTURE','Azure Secretless App',['Managed Identity and Key Vault in','a reference application architecture.'],'AZURE  /  BICEP  /  MANAGED IDENTITY'],
    ['policy-pipeline','06','POLICY AS CODE','IaC Policy Pipeline',['OPA and Conftest policy checks','for cloud infrastructure changes.'],'OPA  /  CONFTEST  /  CI']
  ];
  for (const theme of ['light','dark']) {
    const c=theme==='light'?{bg:'#f4f6f3',border:'#d7e0db',ink:'#142c35',sub:'#405962',accent:'#087c63',rule:'#d5dfd9'}:{bg:'#122630',border:'#334a55',ink:'#f0f4ee',sub:'#b4c6cb',accent:'#72ddbd',rule:'#334a55'};
    for(const [name,num,category,title,lines,stack] of cards) {
      let b=`<rect x="1" y="1" width="698" height="318" rx="12" fill="${c.bg}" stroke="${c.border}" stroke-width="2"/>`;
      b+=text(34,47,18,category,c.accent,'Arial, sans-serif',700,'letter-spacing="2"');
      b+=text(666,47,21,num,c.sub,face,400,'text-anchor="end"');
      b+=text(34,112,40,title,c.ink,face,700);
      b+=text(34,166,25,lines[0],c.sub,'Arial, sans-serif');
      b+=text(34,203,25,lines[1],c.sub,'Arial, sans-serif');
      b+=`<path d="M34 244H666" stroke="${c.rule}"/>`;
      b+=text(34,286,18,stack,c.sub,face,400,'letter-spacing="1"');
      b+=text(664,287,30,'↗',c.accent,'Arial, sans-serif',400,'text-anchor="end"');
      await save(name+'-'+theme,svg(700,320,title+'. '+lines.join(' ')+' '+stack,b));
    }
  }
}
main().catch(e=>{console.error(e);process.exitCode=1;});
