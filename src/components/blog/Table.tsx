import type { ReactNode } from "react";

/* ---------------------------------------------------------------------------
 * Tabela dos posts.
 * O MDX roda sem remark-gfm (ver next.config.ts), então a sintaxe de tabela
 * do Markdown (| a | b |) não funciona. No post, use:
 *
 *   <Table
 *     head={["Modelo", "Quando funciona"]}
 *     rows={[["Roleta simples", "Equipe pequena"]]}
 *   />
 *
 * As peças (TableWrap, Th, Td, Tr) também ficam mapeadas em mdx-components,
 * para o caso de o GFM voltar a ser ativado.
 * --------------------------------------------------------------------------- */

/* Tabela larga rola de lado no celular sem quebrar a página. */
export function TableWrap({ children }: { children?: ReactNode }) {
  return (
    <div className="mt-8 overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full border-collapse text-base leading-normal">{children}</table>
    </div>
  );
}

export function Th({ children }: { children?: ReactNode }) {
  return (
    <th scope="col" className="bg-primary text-white text-left font-semibold px-4 py-3 whitespace-nowrap">
      {children}
    </th>
  );
}

export function Td({ children }: { children?: ReactNode }) {
  return <td className="px-4 py-3 border-t border-gray-200 align-top text-gray-700">{children}</td>;
}

export function Tr({ children }: { children?: ReactNode }) {
  return <tr className="even:bg-surface-light">{children}</tr>;
}

export default function Table({ head, rows }: { head: ReactNode[]; rows: ReactNode[][] }) {
  return (
    <TableWrap>
      <thead>
        <Tr>
          {head.map((cell, i) => (
            <Th key={i}>{cell}</Th>
          ))}
        </Tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <Tr key={i}>
            {row.map((cell, j) => (
              <Td key={j}>{cell}</Td>
            ))}
          </Tr>
        ))}
      </tbody>
    </TableWrap>
  );
}
