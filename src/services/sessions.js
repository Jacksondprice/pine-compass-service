// sessions helpers for invoice generation and reminders

export function sessionsStep0(records, limit = 150) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep1(records, limit = 146) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep2(records, limit = 155) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep3(records, limit = 216) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep4(records, limit = 460) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep5(records, limit = 393) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep6(records, limit = 263) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep7(records, limit = 204) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep8(records, limit = 459) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep9(records, limit = 371) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep10(records, limit = 457) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 10', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
