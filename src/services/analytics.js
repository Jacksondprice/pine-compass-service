// analytics helpers for invoice generation and reminders

export function analyticsStep0(records, limit = 389) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep1(records, limit = 190) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep2(records, limit = 320) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep3(records, limit = 71) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep4(records, limit = 224) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep5(records, limit = 159) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
