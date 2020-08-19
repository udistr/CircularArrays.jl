var documenterSearchIndex = {"docs":
[{"location":"main/#CyclicArrays","page":"Main","title":"CyclicArrays","text":"","category":"section"},{"location":"main/","page":"Main","title":"Main","text":"CyclicArrays allow for the intuitive definition of circular domain composed of one or more faces, and each face has two directions for each dimension. After the definition of the connection between different faces, out-of-boundary indexes will be permitted. The CyclicArray structure includes two fields - data array and connection array. The data array containing the data values and the connection array containing the information on the connections between faces and their sides.","category":"page"},{"location":"main/#The-connection-array","page":"Main","title":"The connection array","text":"","category":"section"},{"location":"main/","page":"Main","title":"Main","text":"The connection array is a four-dimensional array defining the connections between faces:","category":"page"},{"location":"main/","page":"Main","title":"Main","text":"Face dimension - 1:(number of faces)\nSpatial dimensions, size up to three - x=1, y=2, z=3\nDirection, size 2 (negative direction = 1, positive direction = 2)\nDestiny - four values pointing each (1) face, (2) dimension, and (3) direction to its neighbor. The fourth value (4) indicates whether there is a need to flip the face upside-down (0 - no-flip, 1 - flip).","category":"page"},{"location":"main/#D,-1-face-example","page":"Main","title":"1D, 1 face example","text":"","category":"section"},{"location":"main/","page":"Main","title":"Main","text":"(Image: CyclicArrayExample1D)","category":"page"},{"location":"main/","page":"Main","title":"Main","text":"One face (size N) with one circular x dimention will have a 1x1x2x4 connection array where:   connections[1,1,:,:]=    1  1  2  0    1  1  1  0  ","category":"page"},{"location":"main/","page":"Main","title":"Main","text":"The first row (array indexes [1,1,1,:]) indicates that face one, x dimension, negative direction is pointing to face one, x-direction, positive direction. The second row (array indexes [1,1,2,:]) indicates that face one, x dimension, positive direction is pointing to face one, x-direction, negative direction. Array fliping is not relevant in 1D array and should be set to zero (connection[:,:,:,4]=0).","category":"page"},{"location":"main/#D,-1-face-example-2","page":"Main","title":"2D, 1 face example","text":"","category":"section"},{"location":"main/","page":"Main","title":"Main","text":"(Image: CyclicArrayExample2D)","category":"page"},{"location":"main/","page":"Main","title":"Main","text":"One face (size NxN) with circular x and y dimentions will have a 1x2x2x4 connection array where:   connections[1,1,:,:]=    1  1  2  0    1  1  1  0   connections[1,2,:,:]=    1  2  2  0    1  2  1  0  ","category":"page"},{"location":"main/","page":"Main","title":"Main","text":"connections[1,1,:,:] - The first row (array indexes [1,1,1,:]) indicates that face one, x dimension, negative direction is pointing to face one, x-direction, positive direction. The second row (array indexes [1,1,2,:]) indicates that face one, x dimension, positive direction is pointing to face one, x-direction, negative direction.    connections[1,2,:,:] -  The first row (array indexes [1,2,1,:]) indicates that face one, y dimension, negative direction is pointing to face one, y-direction, positive direction. The second row (array indexes [1,2,2,:]) indicates that face one, y dimension, positive direction is pointing to face one, x dimension, negative direction. No array fliping here.","category":"page"},{"location":"main/#Use-examples","page":"Main","title":"Use examples","text":"","category":"section"},{"location":"main/#Diffusion-1D","page":"Main","title":"Diffusion 1D","text":"","category":"section"},{"location":"main/","page":"Main","title":"Main","text":"Example examples/Diffusion_1D.jl will run a simple 1D diffustion equations:","category":"page"},{"location":"main/","page":"Main","title":"Main","text":"(Image: \\frac{\\partial \\rho}{\\partial t} = \\frac{\\partial^2 \\rho}{\\partial x^2}),   where, (Image: \\rho (x,t)) is the density.","category":"page"},{"location":"main/","page":"Main","title":"Main","text":"Using the embedded function shiftc which which returns a shifted value of the array, this example integrated for 12 seconds results:","category":"page"},{"location":"main/","page":"Main","title":"Main","text":"(Image: Diffusion1D)","category":"page"},{"location":"main/#Advection-1D","page":"Main","title":"Advection 1D","text":"","category":"section"},{"location":"main/","page":"Main","title":"Main","text":"Example examples/Advection_1D.jl will run a simple 1D Advection equations:","category":"page"},{"location":"main/","page":"Main","title":"Main","text":"(Image: \\frac{\\partial ( \\rho \\cdot \\u)}{\\partial t} = -u \\cdot \\frac{\\partial ( \\rho \\cdot \\u)}{\\partial x})  ","category":"page"},{"location":"main/","page":"Main","title":"Main","text":"(Image: \\frac{\\partial \\rho}{\\partial t} = -\\frac{\\partial ( \\rho \\cdot u)}{\\partial x})","category":"page"},{"location":"main/","page":"Main","title":"Main","text":"where, (Image: \\rho (x,t)) and (Image: u (x,t)) are the density and x-dimension velocity fields.","category":"page"},{"location":"main/","page":"Main","title":"Main","text":"(Image: Advection1D)","category":"page"},{"location":"main/#Random-Flow","page":"Main","title":"Random Flow","text":"","category":"section"},{"location":"main/","page":"Main","title":"Main","text":"Example examples/RandomFlow_2D.jl simulates the trajectories of a particle cloud in a randomly generated flow field, given the stream function:","category":"page"},{"location":"main/","page":"Main","title":"Main","text":"f(y,x) = sin(x) + sin(y)","category":"page"},{"location":"main/","page":"Main","title":"Main","text":"(Image: Advection1D)","category":"page"},{"location":"#CyclicArrays.jl","page":"Home","title":"CyclicArrays.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for CyclicArrays.jl","category":"page"},{"location":"","page":"Home","title":"Home","text":"Contents:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Pages = [\"index.md\",\"main.md\",\"API.md\"]\nDepth = 3","category":"page"},{"location":"API/","page":"API Guide","title":"API Guide","text":"CyclicArray","category":"page"},{"location":"API/#CyclicArrays.CyclicArray","page":"API Guide","title":"CyclicArrays.CyclicArray","text":"CyclicArray\n\nCyclicArray data structure. Available constructors:\n\nCyclicArray(data::AbstractArray{T,N}, connections::AbstractArray)\n\nTo generate a new CyclicArray with the connections of x:\n\nCyclicArray(x::CyclicArray)\n\nTo generate a new CyclicArray with the connections:\n\nCyclicArray(connections)\n\nTo generate a new CyclicArray with the connections of y and data from x:\n\nCyclicArray(x::AbstractArray,y::CyclicArray)\n\n\n\n\n\n","category":"type"},{"location":"API/","page":"API Guide","title":"API Guide","text":"diff","category":"page"},{"location":"API/#Base.diff","page":"API Guide","title":"Base.diff","text":"diff\n\ndiff(A::CyclicArray)\ndiff(A::CyclicArray; dims::Integer)\n\nFinite difference operator on a vector or a multidimensional array A. In the latter case the dimension to operate on needs to be specified with the dims keyword argument.\n\n\n\n\n\n","category":"function"},{"location":"API/","page":"API Guide","title":"API Guide","text":"stagger","category":"page"},{"location":"API/#CyclicArrays.stagger","page":"API Guide","title":"CyclicArrays.stagger","text":"stagger\n\nstagger(A::CyclicArray; dims=1::Integer, frac=0.5::Real)\n\nLinear interpolation of the array to intermidiate grid positions\n\n\n\n\n\n","category":"function"},{"location":"API/","page":"API Guide","title":"API Guide","text":"shiftc","category":"page"},{"location":"API/#CyclicArrays.shiftc","page":"API Guide","title":"CyclicArrays.shiftc","text":"shiftc\n\nshiftc(A::CyclicArray; dims=1::Integer, shift=1::Real)\n\nShifts array by an integer\n\n\n\n\n\n","category":"function"}]
}
