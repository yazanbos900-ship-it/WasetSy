var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_vite = require("vite");
var DB_FILE = import_path.default.join(process.cwd(), "db.json");
var DEFAULT_DB = {
  categories: [
    { id: "1", name: "\u0633\u064A\u0627\u0631\u0627\u062A", icon: "fas fa-car" },
    { id: "2", name: "\u0639\u0642\u0627\u0631\u0627\u062A", icon: "fas fa-home" },
    { id: "3", name: "\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0627\u062A", icon: "fas fa-laptop" },
    { id: "4", name: "\u062E\u062F\u0645\u0627\u062A", icon: "fas fa-concierge-bell" }
  ],
  banners: [
    { id: "1", title: "\u0645\u0631\u062D\u0628\u0627\u064B \u0628\u0643\u0645 \u0641\u064A \u0648\u0633\u064A\u0637 \u0628\u0644\u0627\u0633", subtitle: "\u0623\u0643\u0628\u0631 \u0645\u0646\u0635\u0629 \u0625\u0639\u0644\u0627\u0646\u0627\u062A \u0641\u064A \u0633\u0648\u0631\u064A\u0627", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80", active: true }
  ],
  ads: [
    {
      id: "ad-1",
      title: "\u0622\u064A\u0641\u0648\u0646 15 \u0628\u0631\u0648 \u0645\u0627\u0643\u0633 \u062C\u062F\u064A\u062F",
      description: "\u062C\u0647\u0627\u0632 \u062C\u062F\u064A\u062F \u0644\u0645 \u064A\u0641\u062A\u062D\u060C \u0644\u0648\u0646 \u062A\u0627\u064A\u062A\u0646\u064A\u0648\u0645 \u0637\u0628\u064A\u0639\u064A.",
      price: 4500,
      category: "\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0627\u062A",
      image: "https://picsum.photos/seed/iphone/800/600",
      userId: "admin_zakour",
      userName: "\u0627\u0644\u0645\u062F\u064A\u0631 \u0632\u0643\u0648\u0631",
      isFeatured: true,
      condition: "new",
      location: "\u062F\u0645\u0634\u0642",
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    },
    {
      id: "ad-2",
      title: "\u0633\u064A\u0627\u0631\u0629 \u062A\u0648\u064A\u0648\u062A\u0627 \u0643\u0627\u0645\u0631\u064A 2024",
      description: "\u0641\u0644 \u0643\u0627\u0645\u0644\u060C \u0645\u0645\u0634\u0649 \u0628\u0633\u064A\u0637 \u062C\u062F\u0627\u064B\u060C \u0635\u064A\u0627\u0646\u0629 \u062F\u0648\u0631\u064A\u0629 \u0628\u0627\u0644\u0648\u0643\u0627\u0644\u0629.",
      price: 11e4,
      category: "\u0633\u064A\u0627\u0631\u0627\u062A",
      image: "https://picsum.photos/seed/car/800/600",
      userId: "admin_zakour",
      userName: "\u0627\u0644\u0645\u062F\u064A\u0631 \u0632\u0643\u0648\u0631",
      isFeatured: false,
      condition: "used",
      location: "\u062F\u0645\u0634\u0642",
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    }
  ],
  orders: [],
  chats: [],
  reports: [],
  users: [
    {
      id: "admin_zakour",
      name: "\u0627\u0644\u0645\u062F\u064A\u0631 \u0632\u0643\u0648\u0631",
      email: "admin@waseet.com",
      phone: "zakour",
      role: "ADMIN",
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      storeName: "\u0627\u0644\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0639\u0627\u0645\u0629",
      storeImage: "https://picsum.photos/seed/store/200"
    }
  ],
  notifications: []
};
function readDb() {
  try {
    if (!import_fs.default.existsSync(DB_FILE)) {
      import_fs.default.writeFileSync(DB_FILE, JSON.stringify(DEFAULT_DB, null, 2), "utf8");
      return DEFAULT_DB;
    }
    const data = import_fs.default.readFileSync(DB_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Failed to read database schema, resetting to default:", error);
    return DEFAULT_DB;
  }
}
function writeDb(data) {
  try {
    import_fs.default.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), "utf8");
  } catch (error) {
    console.error("Failed to write to database file:", error);
  }
}
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json({ limit: "50mb" }));
  app.use(import_express.default.urlencoded({ limit: "50mb", extended: true }));
  app.get("/api/notifications/:userId", (req, res) => {
    const db = readDb();
    const userId = req.params.userId;
    const items = (db.notifications || []).filter((n) => n.userId === userId).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    res.json(items);
  });
  app.post("/api/notifications/read/:id", (req, res) => {
    const db = readDb();
    db.notifications = (db.notifications || []).map((n) => n.id === req.params.id ? { ...n, isRead: true } : n);
    writeDb(db);
    res.json({ success: true });
  });
  app.post("/api/notifications/read-all/:userId", (req, res) => {
    const db = readDb();
    db.notifications = (db.notifications || []).map((n) => n.userId === req.params.userId ? { ...n, isRead: true } : n);
    writeDb(db);
    res.json({ success: true });
  });
  app.post("/api/notifications", (req, res) => {
    const db = readDb();
    const notif = {
      ...req.body,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      isRead: false
    };
    db.notifications = [notif, ...db.notifications || []];
    writeDb(db);
    res.json(notif);
  });
  app.get("/api/banners", (req, res) => {
    const db = readDb();
    res.json(db.banners || []);
  });
  app.post("/api/banners", (req, res) => {
    const db = readDb();
    const newBanner = {
      id: Math.random().toString(36).substr(2, 9),
      title: req.body.title,
      subtitle: req.body.subtitle || "",
      image: req.body.image,
      active: true
    };
    db.banners = [newBanner, ...db.banners || []];
    writeDb(db);
    res.json(newBanner);
  });
  app.delete("/api/banners/:id", (req, res) => {
    const db = readDb();
    db.banners = (db.banners || []).filter((b) => b.id !== req.params.id);
    writeDb(db);
    res.json({ success: true });
  });
  app.put("/api/banners/:id/status", (req, res) => {
    const db = readDb();
    db.banners = (db.banners || []).map((b) => b.id === req.params.id ? { ...b, active: !b.active } : b);
    writeDb(db);
    res.json({ success: true });
  });
  app.get("/api/categories", (req, res) => {
    const db = readDb();
    res.json(db.categories || []);
  });
  app.post("/api/categories", (req, res) => {
    const db = readDb();
    const newCat = {
      id: Math.random().toString(36).substr(2, 9),
      name: req.body.name,
      icon: req.body.icon || "fas fa-tag"
    };
    db.categories = [newCat, ...db.categories || []];
    writeDb(db);
    res.json(newCat);
  });
  app.delete("/api/categories/:id", (req, res) => {
    const db = readDb();
    db.categories = (db.categories || []).filter((c) => c.id !== req.params.id);
    writeDb(db);
    res.json({ success: true });
  });
  app.get("/api/ads", (req, res) => {
    const db = readDb();
    const limitCount = Number(req.query.limit) || 100;
    const sortedAds = (db.ads || []).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    res.json(sortedAds.slice(0, limitCount));
  });
  app.get("/api/ads/user/:userId", (req, res) => {
    const db = readDb();
    const items = (db.ads || []).filter((a) => a.userId === req.params.userId).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    res.json(items);
  });
  app.get("/api/ads/:id", (req, res) => {
    const db = readDb();
    const ad = (db.ads || []).find((a) => a.id === req.params.id);
    if (!ad) return res.status(404).json({ error: "\u0627\u0644\u0623\u0639\u0644\u0627\u0646 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    res.json(ad);
  });
  app.post("/api/ads", (req, res) => {
    const db = readDb();
    const adData = req.body;
    const newAd = {
      id: Math.random().toString(36).substr(2, 9),
      title: adData.title || "",
      description: adData.description || "",
      price: adData.price || 0,
      category: adData.category || "\u0639\u0627\u0645",
      image: adData.image || "https://picsum.photos/seed/default/800/600",
      images: adData.images || [],
      userId: adData.userId,
      userName: adData.userName || "\u0645\u0633\u062A\u062E\u062F\u0645",
      isFeatured: false,
      condition: adData.condition || "new",
      location: adData.location || "\u062F\u0645\u0634\u0642",
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    db.ads = [newAd, ...db.ads || []];
    writeDb(db);
    res.json(newAd);
  });
  app.delete("/api/ads/:id", (req, res) => {
    const db = readDb();
    db.ads = (db.ads || []).filter((a) => a.id !== req.params.id);
    writeDb(db);
    res.json({ success: true });
  });
  app.put("/api/ads/:id/toggle-featured", (req, res) => {
    const db = readDb();
    db.ads = (db.ads || []).map((a) => a.id === req.params.id ? { ...a, isFeatured: !a.isFeatured } : a);
    writeDb(db);
    res.json({ success: true });
  });
  app.put("/api/ads/:id", (req, res) => {
    const db = readDb();
    const updates = req.body;
    db.ads = (db.ads || []).map((a) => a.id === req.params.id ? { ...a, ...updates } : a);
    writeDb(db);
    res.json({ success: true });
  });
  app.get("/api/users/:userId", (req, res) => {
    const db = readDb();
    const user = (db.users || []).find((u) => u.id === req.params.userId || u.phone === req.params.userId);
    res.json(user || null);
  });
  app.put("/api/users/store/:userId", (req, res) => {
    const db = readDb();
    db.users = (db.users || []).map((u) => u.id === req.params.userId ? { ...u, ...req.body } : u);
    writeDb(db);
    res.json({ success: true });
  });
  app.get("/api/users", (req, res) => {
    const db = readDb();
    res.json(db.users || []);
  });
  app.delete("/api/users/:userId", (req, res) => {
    const db = readDb();
    db.users = (db.users || []).filter((u) => u.id !== req.params.userId);
    writeDb(db);
    res.json({ success: true });
  });
  app.post("/api/users/login-sync", (req, res) => {
    const db = readDb();
    const user = req.body;
    const existing = (db.users || []).find((u) => u.id === user.id);
    if (!existing) {
      db.users = [...db.users || [], user];
      writeDb(db);
    }
    res.json({ success: true });
  });
  app.get("/api/reports", (req, res) => {
    const db = readDb();
    res.json(db.reports || []);
  });
  app.post("/api/reports", (req, res) => {
    const db = readDb();
    const report = {
      id: Math.random().toString(36).substr(2, 9),
      adId: req.body.adId,
      adTitle: req.body.adTitle,
      reporterId: req.body.reporterId,
      reporterName: req.body.reporterName,
      reason: req.body.reason,
      details: req.body.details,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      status: "PENDING"
    };
    db.reports = [report, ...db.reports || []];
    writeDb(db);
    res.json(report);
  });
  app.put("/api/reports/:id/status", (req, res) => {
    const db = readDb();
    db.reports = (db.reports || []).map((r) => r.id === req.params.id ? { ...r, status: req.body.status } : r);
    writeDb(db);
    res.json({ success: true });
  });
  app.get("/api/orders", (req, res) => {
    const db = readDb();
    res.json(db.orders || []);
  });
  app.post("/api/orders", (req, res) => {
    const db = readDb();
    const orderData = req.body;
    const newOrder = {
      id: Math.random().toString(36).substr(2, 9),
      adId: orderData.adId,
      adTitle: orderData.adTitle,
      sellerId: orderData.sellerId,
      buyerId: orderData.buyerId,
      buyerName: orderData.buyerName,
      amount: orderData.amount,
      date: (/* @__PURE__ */ new Date()).toISOString(),
      status: "PENDING",
      deliveryCode: orderData.deliveryCode,
      paymentMethod: orderData.paymentMethod,
      paymentProvider: orderData.paymentProvider,
      shippingAddress: orderData.shippingAddress
    };
    db.orders = [newOrder, ...db.orders || []];
    writeDb(db);
    res.json(newOrder);
  });
  app.put("/api/orders/:id/status", (req, res) => {
    const db = readDb();
    db.orders = (db.orders || []).map((o) => o.id === req.params.id ? { ...o, status: req.body.status } : o);
    writeDb(db);
    res.json({ success: true });
  });
  app.get("/api/comments/:adId", (req, res) => {
    const db = readDb();
    const key = `comments_${req.params.adId}`;
    res.json(db[key] || []);
  });
  app.post("/api/comments/:adId", (req, res) => {
    const db = readDb();
    const key = `comments_${req.params.adId}`;
    const comment = {
      id: Math.random().toString(36).substr(2, 9),
      adId: req.params.adId,
      userId: req.body.userId,
      userName: req.body.userName,
      text: req.body.text,
      image: req.body.image,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    db[key] = [comment, ...db[key] || []];
    writeDb(db);
    res.json(comment);
  });
  app.get("/api/chats", (req, res) => {
    const db = readDb();
    res.json(db.chats || []);
  });
  app.get("/api/chats/:roomId/messages", (req, res) => {
    const db = readDb();
    const key = `messages_${req.params.roomId}`;
    res.json(db[key] || []);
  });
  app.post("/api/chats/message", (req, res) => {
    const db = readDb();
    const { roomId, ad, buyer, text, senderId, senderName } = req.body;
    let room = (db.chats || []).find((c) => c.id === roomId);
    if (!room) {
      room = {
        id: roomId,
        adId: ad.id,
        adTitle: ad.title,
        buyerId: buyer.id,
        buyerName: buyer.name,
        sellerId: ad.userId,
        sellerName: ad.userName,
        lastUpdated: (/* @__PURE__ */ new Date()).toISOString(),
        messages: []
      };
      db.chats = [...db.chats || [], room];
    } else {
      room.lastUpdated = (/* @__PURE__ */ new Date()).toISOString();
      db.chats = (db.chats || []).map((c) => c.id === roomId ? room : c);
    }
    const messageData = {
      id: Math.random().toString(36).substr(2, 9),
      senderId,
      senderName,
      text,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    const key = `messages_${roomId}`;
    db[key] = [...db[key] || [], messageData];
    writeDb(db);
    res.json({ room, messages: db[key] });
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server starting on port ${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
