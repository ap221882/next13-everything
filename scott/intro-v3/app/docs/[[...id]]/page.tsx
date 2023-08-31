const DocsIdPage = ({ params }: { params: any }) => {
  console.log({ params })

  return <>id :{params.id}</>
}

export default DocsIdPage

export const dynamicParams = true
