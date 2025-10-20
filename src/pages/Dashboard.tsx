import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, CheckCircle2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const transactions = [
    {
      id: "TXN001",
      project: "Community Center Construction",
      from: "Authority",
      to: "Officer",
      amount: "₹12,50,000",
      date: "2025-01-15",
      status: "Completed",
      receipt: "receipt_001.pdf",
    },
    {
      id: "TXN002",
      project: "Highway Expansion Project",
      from: "Officer",
      to: "Manager",
      amount: "₹60,00,000",
      date: "2025-01-18",
      status: "Completed",
      receipt: "receipt_002.pdf",
    },
    {
      id: "TXN003",
      project: "Water Supply Infrastructure",
      from: "Manager",
      to: "Worker",
      amount: "₹30,00,000",
      date: "2025-01-20",
      status: "Pending",
      receipt: null,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Public Dashboard
            </h1>
            <p className="text-muted-foreground">
              Real-time fund flow monitoring and receipt verification
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card className="p-6 border-border bg-card">
              <div className="text-sm text-muted-foreground mb-1">Total Projects</div>
              <div className="text-2xl font-bold text-card-foreground">4</div>
            </Card>
            <Card className="p-6 border-border bg-card">
              <div className="text-sm text-muted-foreground mb-1">Total Budget</div>
              <div className="text-2xl font-bold text-card-foreground">₹5.0Cr</div>
            </Card>
            <Card className="p-6 border-border bg-card">
              <div className="text-sm text-muted-foreground mb-1">Transactions</div>
              <div className="text-2xl font-bold text-card-foreground">247</div>
            </Card>
            <Card className="p-6 border-border bg-card">
              <div className="text-sm text-muted-foreground mb-1">Receipts Verified</div>
              <div className="text-2xl font-bold text-card-foreground">231</div>
            </Card>
          </div>

          {/* Recent Transactions */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Recent Transactions</h2>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <Card key={transaction.id} className="p-6 border-border bg-card">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-card-foreground">{transaction.project}</h3>
                        <Badge variant={transaction.status === "Completed" ? "default" : "outline"}>
                          {transaction.status === "Completed" ? (
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                          ) : (
                            <Clock className="h-3 w-3 mr-1" />
                          )}
                          {transaction.status}
                        </Badge>
                      </div>
                      <div className="grid md:grid-cols-4 gap-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">ID: </span>
                          <span className="font-medium text-card-foreground">{transaction.id}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">From: </span>
                          <span className="font-medium text-card-foreground">{transaction.from}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">To: </span>
                          <span className="font-medium text-card-foreground">{transaction.to}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Date: </span>
                          <span className="font-medium text-card-foreground">{transaction.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{transaction.amount}</div>
                      </div>
                      {transaction.receipt ? (
                        <Button variant="outline" size="sm" className="gap-2">
                          <Download className="h-4 w-4" />
                          Receipt
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" disabled className="gap-2">
                          <FileText className="h-4 w-4" />
                          Pending
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Info Note */}
          <Card className="p-6 bg-primary/5 border-primary/20">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Note:</strong> All transaction data is updated in real-time. 
              Citizens can download receipts for completed transactions. For any discrepancies, please contact 
              the transparency office.
            </p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
