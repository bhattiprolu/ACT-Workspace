const fs = require('fs');
const path = require('path');

const skillsDir = path.join(__dirname, 'skills');

function validateManifest(manifestPath) {
  try {
    const content = fs.readFileSync(manifestPath, 'utf8');
    const m = JSON.parse(content);
    const required = ['name', 'version', 'description', 'entrypoint', 'triggers'];
    const missing = required.filter(k => !(k in m));
    if (missing.length) {
      return {ok: false, error: `Missing fields: ${missing.join(', ')}`};
    }
    if (!Array.isArray(m.triggers)) return {ok:false, error:'triggers must be an array'};
    return {ok: true};
  } catch (e) {
    return {ok:false, error: e.message};
  }
}

function main() {
  if (!fs.existsSync(skillsDir)) {
    console.error('No skills directory found');
    process.exit(1);
  }
  const skills = fs.readdirSync(skillsDir, {withFileTypes:true}).filter(d=>d.isDirectory()).map(d=>d.name);
  let allOk = true;
  for (const s of skills) {
    const manifestPath = path.join(skillsDir, s, 'manifest.json');
    if (!fs.existsSync(manifestPath)) {
      console.error(`${s}: manifest.json missing`);
      allOk = false;
      continue;
    }
    const res = validateManifest(manifestPath);
    if (!res.ok) {
      console.error(`${s}: ${res.error}`);
      allOk = false;
    } else {
      console.log(`${s}: OK`);
    }
  }
  process.exit(allOk?0:2);
}

main();
