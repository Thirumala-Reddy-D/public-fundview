import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, CheckCircle2, Clock, Search, Crown, UserCheck, Users2, HardHat, ArrowRight, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const transactions = [
    {
      id: "TXN001",
      project: "Community Center Construction",
      totalAmount: "₹50,00,000",
      fundFlow: [
        {
          from: "Authority",
          to: "Officer",
          amount: "₹50,00,000",
          date: "2025-01-10",
          confirmed: true,
          receipt: "receipt_auth_001.pdf",
          icon: Crown,
        },
        {
          from: "Officer",
          to: "Manager",
          amount: "₹12,50,000",
          date: "2025-01-15",
          confirmed: true,
          receipt: "receipt_off_001.pdf",
          icon: UserCheck,
        },
        {
          from: "Manager",
          to: "Worker",
          amount: "₹8,00,000",
          date: "2025-01-18",
          confirmed: true,
          receipt: "receipt_mgr_001.pdf",
          icon: Users2,
        },
      ],
    },
    {
      id: "TXN002",
      project: "Highway Expansion Project",
      totalAmount: "₹2,50,00,000",
      fundFlow: [
        {
          from: "Authority",
          to: "Officer",
          amount: "₹2,50,00,000",
          date: "2025-01-12",
          confirmed: true,
          receipt: "receipt_auth_002.pdf",
          icon: Crown,
        },
        {
          from: "Officer",
          to: "Manager",
          amount: "₹60,00,000",
          date: "2025-01-18",
          confirmed: true,
          receipt: "receipt_off_002.pdf",
          icon: UserCheck,
        },
        {
          from: "Manager",
          to: "Worker",
          amount: "₹30,00,000",
          date: "2025-01-20",
          confirmed: false,
          receipt: null,
          icon: Users2,
        },
      ],
    },
    {
      id: "TXN003",
      project: "Water Supply Infrastructure",
      totalAmount: "₹1,20,00,000",
      fundFlow: [
        {
          from: "Authority",
          to: "Officer",
          amount: "₹1,20,00,000",
          date: "2025-01-08",
          confirmed: true,
          receipt: "receipt_auth_003.pdf",
          icon: Crown,
        },
        {
          from: "Officer",
          to: "Manager",
          amount: "₹1,20,00,000",
          date: "2025-01-14",
          confirmed: true,
          receipt: "receipt_off_003.pdf",
          icon: UserCheck,
        },
        {
          from: "Manager",
          to: "Worker",
          amount: "₹1,00,00,000",
          date: "2025-01-19",
          confirmed: true,
          receipt: "receipt_mgr_003.pdf",
          icon: Users2,
        },
      ],
    },
    {
      id: "TXN004",
      project: "Rural Electrification",
      totalAmount: "₹80,00,000",
      fundFlow: [
        {
          from: "Authority",
          to: "Officer",
          amount: "₹80,00,000",
          date: "2025-01-20",
          confirmed: true,
          receipt: "receipt_auth_004.pdf",
          icon: Crown,
        },
        {
          from: "Officer",
          to: "Manager",
          amount: "₹20,00,000",
          date: "2025-01-22",
          confirmed: false,
          receipt: null,
          icon: UserCheck,
        },
      ],
    },
  ];

  // Filter transactions based on search query
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">Fund Flow Transactions</h2>
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by project name or ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            {filteredTransactions.length === 0 ? (
              <Card className="p-8 text-center border-border bg-card">
                <p className="text-muted-foreground">No projects found matching "{searchQuery}"</p>
              </Card>
            ) : (
              <div className="space-y-6">
                {filteredTransactions.map((transaction) => (
                  <Card key={transaction.id} className="p-6 border-border bg-card">
                    {/* Project Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-4 border-b border-border">
                      <div>
                        <h3 className="text-xl font-semibold text-card-foreground mb-1">
                          {transaction.project}
                        </h3>
                        <p className="text-sm text-muted-foreground">Transaction ID: {transaction.id}</p>
                      </div>
                      <div className="mt-2 md:mt-0 text-right">
                        <div className="text-sm text-muted-foreground">Total Budget</div>
                        <div className="text-2xl font-bold text-primary">{transaction.totalAmount}</div>
                      </div>
                    </div>

                    {/* Fund Flow Details */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-card-foreground mb-3">Complete Fund Flow</h4>
                      
                      {transaction.fundFlow.map((flow, index) => (
                        <div key={index}>
                          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center p-4 rounded-lg bg-muted/30">
                            {/* From/To Section */}
                            <div className="flex items-center gap-3 flex-1">
                              <div className="p-2 rounded-lg bg-primary/10">
                                <flow.icon className="h-5 w-5 text-primary" />
                              </div>
                              <div className="flex items-center gap-2">
                                <div>
                                  <div className="text-sm font-medium text-card-foreground">{flow.from}</div>
                                </div>
                                <ArrowRight className="h-4 w-4 text-muted-foreground mx-2" />
                                <div>
                                  <div className="text-sm font-medium text-card-foreground">{flow.to}</div>
                                </div>
                              </div>
                            </div>

                            {/* Amount & Date */}
                            <div className="flex items-center gap-4">
                              <div className="text-right">
                                <div className="text-sm text-muted-foreground">Amount</div>
                                <div className="font-semibold text-card-foreground">{flow.amount}</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm text-muted-foreground">Date</div>
                                <div className="font-medium text-card-foreground text-sm">{flow.date}</div>
                              </div>
                            </div>

                            {/* Confirmation Status */}
                            <div className="flex items-center gap-3">
                              <div className="text-right">
                                <div className="text-sm text-muted-foreground mb-1">Status</div>
                                {flow.confirmed ? (
                                  <Badge variant="default" className="gap-1">
                                    <CheckCircle2 className="h-3 w-3" />
                                    Confirmed
                                  </Badge>
                                ) : (
                                  <Badge variant="destructive" className="gap-1">
                                    <XCircle className="h-3 w-3" />
                                    Pending
                                  </Badge>
                                )}
                              </div>

                              {/* Receipt */}
                              {flow.receipt ? (
                                <Button variant="outline" size="sm" className="gap-2">
                                  <Download className="h-4 w-4" />
                                  Receipt
                                </Button>
                              ) : (
                                <Button variant="outline" size="sm" disabled className="gap-2">
                                  <FileText className="h-4 w-4" />
                                  No Receipt
                                </Button>
                              )}
                            </div>
                          </div>

                          {/* Arrow between flows */}
                          {index < transaction.fundFlow.length - 1 && (
                            <div className="flex justify-center my-2">
                              <div className="w-0.5 h-6 bg-border"></div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Overall Status */}
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Overall Transfer Status:</span>
                        {transaction.fundFlow.every(flow => flow.confirmed) ? (
                          <Badge variant="default" className="gap-1">
                            <CheckCircle2 className="h-3 w-3" />
                            All Transfers Confirmed
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="gap-1">
                            <Clock className="h-3 w-3" />
                            Awaiting Confirmations
                          </Badge>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
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
