interface Item {
  id: number;
  name: string;
  description: string;
}

class ItemService {
  async getItems(page: number, pageSize: number): Promise<Item[]> {
    // Implemente aqui a lógica para buscar os itens da página atual.
    // Neste exemplo, retornamos uma lista fixa de itens.
    const items = [
      { id: 1, name: "Item 1", description: "Descrição do item 1" },
      { id: 2, name: "Item 2", description: "Descrição do item 2" },
      { id: 3, name: "Item 3", description: "Descrição do item 3" },
      { id: 4, name: "Item 4", description: "Descrição do item 4" },
      { id: 5, name: "Item 5", description: "Descrição do item 5" },
      { id: 6, name: "Item 6", description: "Descrição do item 6" },
      { id: 7, name: "Item 7", description: "Descrição do item 7" },
      { id: 8, name: "Item 8", description: "Descrição do item 8" },
      { id: 9, name: "Item 9", description: "Descrição do item 9" },
      { id: 10, name: "Item 10", description: "Descrição do item 10" },
      { id: 11, name: "Item 11", description: "Descrição do item 11" },
      { id: 12, name: "Item 12", description: "Descrição do item 12" },
      { id: 13, name: "Item 13", description: "Descrição do item 13" },
      { id: 14, name: "Item 14", description: "Descrição do item 14" },
      { id: 15, name: "Item 15", description: "Descrição do item 15" },
      { id: 16, name: "Item 16", description: "Descrição do item 16" },
      { id: 17, name: "Item 17", description: "Descrição do item 17" },
      { id: 18, name: "Item 18", description: "Descrição do item 18" },
      { id: 19, name: "Item 19", description: "Descrição do item 19" },
      { id: 20, name: "Item 20", description: "Descrição do item 20" },
    ];
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return items.slice(startIndex, endIndex);
  }
}

class PaginationParams {
  constructor() {
    this.page = 0;
    this.pageSize = 0;
    this.totalItems = 0;
  }
  page: number;
  pageSize: number;
  totalItems: number;
}

class PaginationService {
  async getPage<T>(
    service: (page: number, pageSize: number) => Promise<T[]>,
    params: PaginationParams
  ): Promise<{ items: T[]; pagination: PaginationParams }> {
    const { page, pageSize, totalItems } = params;
    const items = await service(page, pageSize);
    const newParams = {
      page,
      pageSize,
      totalItems,
    };
    return { items, pagination: newParams };
  }
}

//   // Exemplo de uso
//   const itemService =

async function exampleUsage() {
  const itemService = new ItemService();
  const paginationService = new PaginationService();

  const page = 1; // página atual
  const pageSize = 5; // quantidade de itens por página

  const totalItems = 20; // total de itens disponíveis

  // Configura os parâmetros de paginação
  const paginationParams = new PaginationParams();
  paginationParams.page = page;
  paginationParams.pageSize = pageSize;
  paginationParams.totalItems = totalItems;

  // Busca a página atual de itens
  const { items, pagination } = await paginationService.getPage(
    itemService.getItems,
    paginationParams
  );

  // Exibe os itens
  console.log(`Itens da página ${pagination.page}:`);
  for (const item of items) {
    console.log(`- ${item.name}: ${item.description}`);
  }

  // Exibe informações de paginação
  const totalPages = Math.ceil(totalItems / pageSize);
  console.log(`Página ${pagination.page} de ${totalPages}`);
  console.log(`Total de itens: ${totalItems}`);
  console.log(`Itens por página: ${pageSize}`);
}

// Chama a função de exemplo de uso
export default exampleUsage();
