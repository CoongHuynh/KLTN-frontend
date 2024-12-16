import React from "react";
import moment from "moment";
import {
  CardBody,
  TableResponsive,
  Table,
  TableRow,
  TableCell,
  Badge,
  IconLink,
} from "./styles";
import { FaEye } from "react-icons/fa";

const TableOrder = ({ orders, status }) => {
  return (
    <CardBody>
      <TableResponsive>
        <Table>
          <thead>
            <TableRow>
              <TableCell className="bold">Total Price</TableCell>
              <TableCell className="bold">Payment Status</TableCell>
              <TableCell className="bold">Order Date</TableCell>
              {status && <TableCell className="bold">Status</TableCell>}
              <TableCell className="bold">Actions</TableCell>
            </TableRow>
          </thead>
          <tbody>
            {orders
              .filter((order) => order.payment_status === "pending")
              .slice(0, 14)
              .map((order) => (
                <TableRow key={order._id}>
                  <TableCell>${order.total_price}</TableCell>
                  <TableCell>
                    <Badge variant="danger">Not Paid Yet</Badge>
                  </TableCell>
                  <TableCell>{moment(order.createdAt).calendar()}</TableCell>
                  {status && (
                    <TableCell>
                      <Badge
                        variant={
                          order.status === "processing" ? "success" : "danger"
                        }
                      >
                        {order.status}
                      </Badge>
                    </TableCell>
                  )}
                  <TableCell className="eye">
                    <IconLink>
                      <FaEye fontSize={25} />
                    </IconLink>
                  </TableCell>
                </TableRow>
              ))}
          </tbody>
        </Table>
      </TableResponsive>
    </CardBody>
  );
};

export default TableOrder;
