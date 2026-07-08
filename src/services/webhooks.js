// webhooks helpers for invoice generation and reminders

export function webhooksStep0(records, limit = 304) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep1(records, limit = 40) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep2(records, limit = 314) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep3(records, limit = 488) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep4(records, limit = 56) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep5(records, limit = 132) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep6(records, limit = 162) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep7(records, limit = 301) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep8(records, limit = 420) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
