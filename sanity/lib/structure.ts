import type { StructureResolver } from '@/sanity/lib/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('author').title("Authors"),
      S.documentTypeListItem('startup').title("Startups")
    ])
