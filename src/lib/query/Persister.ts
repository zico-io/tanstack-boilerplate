import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'

export const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
})

export const sessionStoragePersister = createSyncStoragePersister({
  storage: window.sessionStorage,
})
