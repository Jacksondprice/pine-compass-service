// geocoding helpers for invoice generation and reminders

export function geocodingStep0(records, limit = 68) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep1(records, limit = 469) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep2(records, limit = 168) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep3(records, limit = 161) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep4(records, limit = 105) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep5(records, limit = 166) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep6(records, limit = 495) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
