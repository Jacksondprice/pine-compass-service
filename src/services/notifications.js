// notifications helpers for invoice generation and reminders

export function notificationsStep0(records, limit = 69) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep1(records, limit = 174) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep2(records, limit = 331) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep3(records, limit = 97) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep4(records, limit = 449) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep5(records, limit = 226) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep6(records, limit = 25) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep7(records, limit = 424) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
