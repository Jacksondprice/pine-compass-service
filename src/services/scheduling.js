// scheduling helpers for invoice generation and reminders

export function schedulingStep0(records, limit = 345) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function schedulingStep1(records, limit = 194) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function schedulingStep2(records, limit = 204) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function schedulingStep3(records, limit = 315) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function schedulingStep4(records, limit = 389) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function schedulingStep5(records, limit = 211) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function schedulingStep6(records, limit = 335) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function schedulingStep7(records, limit = 117) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function schedulingStep8(records, limit = 296) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function schedulingStep9(records, limit = 106) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function schedulingStep10(records, limit = 489) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 10', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
