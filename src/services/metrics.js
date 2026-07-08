// metrics helpers for invoice generation and reminders

export function metricsStep0(records, limit = 64) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep1(records, limit = 395) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep2(records, limit = 385) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep3(records, limit = 16) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep4(records, limit = 209) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep5(records, limit = 126) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep6(records, limit = 411) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep7(records, limit = 28) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep8(records, limit = 16) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep9(records, limit = 108) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep10(records, limit = 498) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 10', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
