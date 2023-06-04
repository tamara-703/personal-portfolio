import {Link} from 'react-router-dom';



export default function Nav()
{
    return (
        <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    {/* <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAAAwMDAODg709PRhYWGUlJTg4OCGhobc3NyysrLCwsK+vr4tLS36+vrHx8fU1NQ/Pz+bm5vl5eXNzc1ISEi4uLiNjY1lZWXV1dXu7u45OTl4eHhTU1NKSkqmpqYVFRUmJiZaWlpwcHCBgYGhoaGF6BK/AAAE9UlEQVR4nO2d61bqMBBGSS2UohYQucgdxfd/xaN4VCC9ZC5pguvbf89yzD6pTTudTDodAAAAAAAAAAAAAAAAAACAv0XemyaaTHtZaKULJhujz2YSWuuXZw9+nzyHFvtm5EnQmFFotS+KR2+Gj0VouRNP3gSNeQ8td8LfFH5MYmi5TyYeBY2J4X764NXwIbTeBwOvhoPQeh0YwhCGMGwDGMLwJg3vuNyM4ZAZangzhvfMUPcwDAMMCcAwEDAkEKnhzB6W4no4Ux1rBc/zRbeaxdQe1rbuB2pCbe1Q09rfPdfIig8T+9dGRMK9Xn7oh1ZopC8TPIYevwMiRb+5UC0kOdXQY3fkr0+hZBLfQg/dkTXbcBV66I6M2YZxL4W/JDCEYfTAEIbxA0MYxo+m4V2Rhqawv9+oGrJj6QFDCjAMAwwpwDAMMKQAwzDAkAIMwwBDCjAMAwwpwDAMMKQAwzDAkAIMwwBDCh4Mi0K8PTtaw+Vot15sx8l4u1jvRkt+oH2Uhulgczmw/WaQMmPZBa2a9TQ8w6y8uOotZ0WbW4H41Yk6hvmi1O+TLsfRblLxwojyhYqh/V9+zpwxrOtiaf5FqmGYNX1HTujTmF+F4F3sJ+SGLpsT6RsOLrcHSMr5xYZuTUGeyAM7L3zlbu44ITXsOQka0yOPbPldgH4ULKwdsaF7Wxf6LHY6w91uJ96KIDMs2eNTSagGHyJDWleXQF1aRIYlW3xq2PqzqENi+E4SNGbn0aMageGSKGiM7KbIRGBI3y8l3L/Eg2+YkgWN4b5NSeAbcjqccRZFKSWGk8yFSWWHs8PqUPVPj26xs0zxL1a7vnQ7W6ZFupyVbDulsB8/aV3Ryoa/Dy73JT0+aCgtLqqGh/OLa3KQhuPv5vJmePlcJu/UR38h8Wx4fVntxBEFr/Y+DO0Wj+KGkt24DO2MU32GygWFVUPR0G4NIG/NK8pfqBvanZ0zcUyFh6DIDRXupmMFtf/YN77rrCcdBcO1gtp/7KSovM+bgqFin2771t4Vx9RY8w/iUfxw/Yco/zNUMVScxM1VaIU+9SrPbYq9ui/XfPl6r2So8Pj4w3kiRqUrjI5hJ3/VGMyJ8XcSfqizDCkZfrzoDOZ9IlVTtFoP7gfrqnYbx7qQJR/K1Qw5cJaC+neFkntvUEPOTbi+b1fJI1BQQ0bjl1V9wOgMKZ/Wvmh4F4rOsEO9Bb82xIvPkPpU1nQ0UHyGxM9rjYeRRGhIuk6brtHWDIuUkk53z6Y5HLbShmExWyTmbrx27je5PDgKHhyyZi0YDn+mxPkwrYldClrG3iWef8OL6h/XOpbUJZe1crryvRtevUU5Z9Sb2/a9uQXybXi9urmfw9SUcHKt2/NtaE2Fe0HhsrqA1piFc2bes6FdOzIl/HRe9S7VJZxx6NmwpEkzqUwrm9u3nGROOsPRs2HJExjx612R985nstvLifsuPBuWFIpyvk8WLw+zwezhhbOp5DYMJcBQCAxbAIZCYNgCMBQCwxaAoRAYtgAMhcCwBWAopMSQlGRRwPN3/BJD9lmjemeUejaMABjCEIbhgSEMYRgez9+eIqCxyoiAYkW7IhrHrH6TupWNtMtedXu74u4ZNY6agowmEP5RbjNBr4j1jcLuw0vkG7F08XBgd664V0/M2E8SZdSfJjEw7Y+8+AEAAAAAAAAAAAAAAAAAAPjlH3VLZGmvMQF6AAAAAElFTkSuQmCC"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> */}
    <span class="font-semibold text-xl tracking-tight"><span className='MY'>MY </span>Portfolio</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
        <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Home</Link>
        <Link to="/projects" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Projects</Link>
    </div>
    <div>

      <a href="https://drive.google.com/file/d/1p8X-m6yNPEADFc15xhM2H6SkeHh8qIqk/view?usp=sharing" target='_blank' className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download Resume</a>
    </div>
  </div>
</nav>
    )
}
