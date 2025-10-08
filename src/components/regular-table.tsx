type RegularTableProps = {
  data: Object[]
}

const styles = {
  regular_table:`
    w-full
    text-sm
    overflow-auto
    text-neutral-700
  `,

  regular_table_table: `
    w-full
    min-w-[600px]
    table-auto
  `,

  regular_table_th: `
    text-left
    py-3
    border-b
    capitalize
    border-neutral-400
  `,

  regular_table_tr:`
    border-b
    border-neutral-200
  `,

  regular_table_td:`
    py-3
  `
}

export function RegularTable({ data }: RegularTableProps) {
  return (
    <div data-testid="rt-wrapper" className={styles.regular_table}>
      <table data-testid="rt-table" className={styles.regular_table_table}>
        <thead data-testid="rt-theader">
          <tr>
            {Object.keys(data[0]).map((item, index) => {
              return (
                <th data-testid="rt-title" key={index + 10} className={styles.regular_table_th}>
                  {item}
                </th>
              )
            })}
          </tr>
        </thead>

        <tbody data-testid="rt-tbody">
          {data.map((line, index) => {
            return (
              <tr key={index + 100} className={styles.regular_table_tr}>
                {Object.values(line).map((item, index) => {
                  return (
                    <td data-testid="rt-item" key={index + 1000} className={styles.regular_table_td}>
                      {item}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export type DataTable<T extends Object> = T[]
