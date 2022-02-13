import { RepositoryItem } from './RepositoryItem'

const repository = {
  name: 'unform',
  description: 'forms in React',
  link: 'https://github.com/anderson-gato'
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}
