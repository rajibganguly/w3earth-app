export interface ICards {
  imagePath: string,
  title: string,
  setFlag: number,
  sign: string,
  nameOfAuthor: string,
  description: string
}

export interface ITopicsListed {
  iconName: string,
  title: string,
  setFlag: number,
  content: ICards[]
}
