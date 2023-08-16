export default function AdminLayout({ children }: {
    children: React.ReactNode
  }){
    return (<div>
        <div><h1>this is admin header</h1></div>
        <div>{children}</div>
        <div><h1>this is admin footer</h1></div>
    </div>)
}