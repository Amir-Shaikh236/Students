import React from "react";
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";

const students = [
    { roll_no: 1, name: 'Amir Shaikh', marks: 95, grade: 'A' },
    { roll_no: 2, name: 'Ayaz', marks: 97, grade: 'A' },
    { roll_no: 3, name: 'Loki', marks: 75, grade: 'B' },
    { roll_no: 4, name: 'Juned', marks: 90, grade: 'A' },
    { roll_no: 5, name: 'Abbas', marks: 87, grade: 'B' },
    { roll_no: 6, name: 'Pankaj', marks: 38, grade: 'F' }
]

export default function Students() {
    return (
        <Card className="max-w-2xl mx-auto my-10 p-6">
            <CardHeader>
                <CardTitle className="text-2xl"> Student Roster </CardTitle>
                <CardDescription> A List of all students Currently enrolled. </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-bold text-left">Roll No</TableHead>
                            <TableHead className="font-bold text-center">Student Name</TableHead>
                            <TableHead className="font-bold text-right">Marks</TableHead>
                            <TableHead className="font-bold text-right">Grade</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {students.map((student) => (
                            <TableRow key={student.roll_no}>
                                <TableCell className="text-left font-medium">{student.roll_no}</TableCell>
                                <TableCell className="font-medium text-center">{student.name}</TableCell>
                                <TableCell className="text-right font-medium">{student.marks}</TableCell>
                                <TableCell className="text-right font-medium"><Badge variant="success">{student.grade}</Badge></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}