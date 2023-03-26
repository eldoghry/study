function towerOfHonai(nDisks, fromRod, usingRod, toRod) {
    if (nDisks === 1) {
        console.log(`- Move Disk 1 moving from ${fromRod} to ${toRod}`)
        return
    }

    towerOfHonai(nDisks - 1, fromRod, toRod, usingRod)
    console.log(`- Move Disk ${nDisks} moving from ${fromRod} to ${toRod}`)
    towerOfHonai(nDisks - 1, usingRod, fromRod, toRod)

}



// A B C 
// from: A | using: B | to: C
towerOfHonai(3, 'A', 'B', 'C');